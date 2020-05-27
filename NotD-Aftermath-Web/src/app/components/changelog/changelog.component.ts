import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { first, skip, take } from 'rxjs/operators';
import { Release } from './../../models/release';
import { ReleaseService } from './../../services/release-service';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['./changelog.component.scss']
})
export class ChangelogComponent implements OnInit {

  private queryVer: string;

  releaseService: ReleaseService;
  selectedRelease: Release;
  logText: any;

  constructor(private router: Router, private route: ActivatedRoute, releaseService: ReleaseService) {
    this.releaseService = releaseService;
  }

  ngOnInit(): void {
    // Get changelog version from query param
    this.route
      .queryParams
      .pipe(first())
      .subscribe(params => {
        this.queryVer = params.v ||  null;
      });
    // Select version on query param when loading
    this.releaseService.releases$
      .pipe(skip(1), take(1))
      .subscribe(rels => {
        if (this.queryVer) {
          this.selectedRelease = rels.find(r => r.version === this.queryVer);
          if (this.selectedRelease != null) {
            this.getReleaseChanges();
          }
        }
    });
  }

  getReleaseChanges(): void {
    this.releaseService.GetReleaseChangelog(this.selectedRelease).subscribe((changelog: any) => {
      this.logText = changelog;
    });
  }

  onVersionChanged(): void {
    this.router.navigate(['changelog'], { queryParams: { v: this.selectedRelease.version }});
    this.getReleaseChanges();
  }

}

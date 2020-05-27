import { Component, OnInit } from '@angular/core';
import { Release } from './../../models/release';
import { ReleaseService } from './../../services/release-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  releaseService: ReleaseService;

  constructor(releaseService: ReleaseService) {
    this.releaseService = releaseService;
  }

  ngOnInit(): void {
  }

  GetDownloadFileName(r: Release): string {
    return r.download.substring(r.download.lastIndexOf('/') + 1);
  }
}

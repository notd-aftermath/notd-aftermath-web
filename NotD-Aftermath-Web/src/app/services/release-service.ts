import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ReleaseIndex } from './../models/releaseIndex';
import { Release } from '../models/release';

@Injectable({providedIn: 'root' })
export class ReleaseService {

    private releaseIndexFile = 'assets/releases/index.json';
    private releaseLogFolder = 'assets/releases/';
    public releases$ = new BehaviorSubject<Release[]>(null);
    public latestRelease$ = new BehaviorSubject<Release>(null);

    constructor(
        private http: HttpClient
    ) { }

    public LoadReleases() {
        this.http.get<ReleaseIndex>(this.releaseIndexFile).subscribe((index: ReleaseIndex) => {
            this.releases$.next(index.releases);
            this.latestRelease$.next(index.releases[0]);
        });
    }

    public GetReleaseChangelog(release: Release): Observable<any> {
        return this.http.get(this.releaseLogFolder + release.logFile, { responseType: 'text' as 'json' });
    }

}

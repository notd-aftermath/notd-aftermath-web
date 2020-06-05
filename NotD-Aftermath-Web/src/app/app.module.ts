import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ChangelogComponent } from './components/changelog/changelog.component';
import { ReleaseService } from './services/release-service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { CodesComponent } from './components/codes/codes.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChangelogComponent,
    HomeComponent,
    SuggestionsComponent,
    CodesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDividerModule,
    MatInputModule,
    MatListModule,
    MatChipsModule,
    HttpClientModule
  ],
  providers: [
    ReleaseService,
    {
      provide: APP_INITIALIZER,
      useFactory: (rs: ReleaseService) => () => rs.LoadReleases(),
      deps: [ReleaseService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

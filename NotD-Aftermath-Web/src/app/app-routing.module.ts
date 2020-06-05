import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChangelogComponent } from './components/changelog/changelog.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { CodesComponent } from './components/codes/codes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'changelog', component: ChangelogComponent },
  { path: 'suggestions', component: SuggestionsComponent },
  { path: 'codes', component: CodesComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

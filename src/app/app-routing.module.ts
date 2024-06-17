import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing/landing-page/landing-page.component';
import { MoodPageComponent } from './modules/mood/mood-page/mood/mood-page.component';
import { CardDetailsMoodComponent } from '@shared/components/card-details-mood/card-details-mood.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  { path: 'mood', component: MoodPageComponent },
  { path: 'mood/:id', component: CardDetailsMoodComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

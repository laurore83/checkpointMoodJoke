import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoodPageComponent } from './mood/mood-page.component';
import { CardDetailsMoodComponent } from '@shared/components/card-details-mood/card-details-mood.component';

const routes: Routes = [
  { path: 'mood', component: MoodPageComponent },
  { path: 'mood/:id', component: CardDetailsMoodComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoodRoutingModule {}

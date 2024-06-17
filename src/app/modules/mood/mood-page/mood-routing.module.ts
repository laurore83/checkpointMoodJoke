import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoodPageComponent } from './mood/mood-page.component';

const routes: Routes = [{ path: 'mood', component: MoodPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoodRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoodRoutingModule } from './mood-routing.module';
import { SharedModule } from 'app/modules/shared/modules/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, MoodRoutingModule],
})
export class MoodModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { SharedModule } from '@shared/modules/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, LandingRoutingModule, SharedModule],
})
export class LandingModule {}

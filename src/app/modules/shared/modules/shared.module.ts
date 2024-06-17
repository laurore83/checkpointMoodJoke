import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimengModule } from '../modules/primeng/primeng.module';
import { CardMoodComponent } from '../components/card-mood/card-mood.component';

@NgModule({
  declarations: [CardMoodComponent],
  imports: [CommonModule, PrimengModule],
  exports: [PrimengModule, CardMoodComponent],
})
export class SharedModule {}

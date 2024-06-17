import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
@NgModule({
  exports: [MenubarModule, CardModule, ButtonModule, InputTextareaModule],
})
export class PrimengModule {}

import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
@NgModule({
  exports: [
    MenubarModule,
    CardModule,
    ButtonModule,
    InputTextareaModule,
    ToastModule,
    DialogModule,
  ],
})
export class PrimengModule {}

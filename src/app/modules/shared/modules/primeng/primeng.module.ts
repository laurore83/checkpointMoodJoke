import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
@NgModule({
  exports: [MenubarModule, CardModule, ButtonModule],
})
export class PrimengModule {}

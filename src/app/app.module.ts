import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './modules/landing/landing-page/landing-page.component';
import { MoodPageComponent } from './modules/mood/mood-page/mood-page.component';

@NgModule({
  declarations: [AppComponent, LandingPageComponent, MoodPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './modules/landing/landing-page/landing-page.component';
import { MoodPageComponent } from './modules/mood/mood-page/mood-page.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { SharedModule } from './modules/shared/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    MoodPageComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

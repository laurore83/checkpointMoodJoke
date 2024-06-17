import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer/footer.component';
import { MoodPageComponent } from '@mood/mood-page/mood/mood-page.component';
import { LandingPageComponent } from './landing/landing-page/landing-page.component';
import { SharedModule } from '@shared/modules/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CardDetailsMoodComponent } from './modules/shared/components/card-details-mood/card-details-mood.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MoodPageComponent,
    LandingPageComponent,
    CardDetailsMoodComponent,
    MoodPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

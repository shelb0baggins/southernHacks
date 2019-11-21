import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ScheduleComponent } from './schedule/schedule.component';
import { IntroComponent } from './intro/intro.component';
import { RegisterComponent } from './register/register.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    IntroComponent,
    RegisterComponent,
    SponsorsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

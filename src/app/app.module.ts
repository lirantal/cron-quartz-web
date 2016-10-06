import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CronconvertComponent } from './cronconvert/cronconvert.component';
import { QuartznotationComponent } from './quartznotation/quartznotation.component';

@NgModule({
  declarations: [
    AppComponent,
    CronconvertComponent,
    QuartznotationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

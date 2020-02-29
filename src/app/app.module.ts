import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Lesson1Component } from './lesson1/lesson1.component';
import { Lesson2Component } from './lesson2/lesson2.component';
import { Lesson3Component } from './lesson3/lesson3.component';
import { Hwang3Component } from './hwang3/hwang3.component';
import { Lesson4Component } from './lesson4/lesson4.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Hwang2Component } from './hwang2/hwang2.component';
import { Lesson5Component } from './lesson5/lesson5.component';
import { Hwang4Component } from './hwang4/hwang4.component';


@NgModule({
  declarations: [
    AppComponent,
    Lesson1Component,
    Lesson2Component,
    Lesson3Component,
    Hwang3Component,
    Lesson4Component,
    Hwang2Component,
    Lesson5Component,
    Hwang4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SummtionComponent } from './summtion/summtion.component';
import { PiPipe } from './pi.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SummtionComponent,
    PiPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimePipe } from './pipes/time.pipe';
import { AlerterDirective } from './directives/alerter.directive';

@NgModule({
  declarations: [
    AppComponent,
    TimePipe,
    AlerterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputCustomDirectiveDirective } from './input-custom-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    InputCustomDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

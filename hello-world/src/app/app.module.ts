import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { InputCustomDirectiveDirective } from './input-custom-directive.directive';
import { HttpServicesComponent } from './http-services/http-services.component';
import { PostService } from '../../services/post.service';


@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    InputCustomDirectiveDirective,
    HttpServicesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

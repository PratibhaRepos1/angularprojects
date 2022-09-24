import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RxJSExampleComponent } from './rx-jsexample/rx-jsexample.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormsComponent,
    NavbarComponent,
    FooterComponent,
    RxJSExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

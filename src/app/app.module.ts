import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register-form/register-form.component';
import { HighlightDirective } from './directives/highlight.directive';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { RxJSComponent } from './components/rx-js/rx-js.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HighlightDirective,
    TestComponentComponent,
    RxJSComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

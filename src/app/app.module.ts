import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register-form/register-form.component';
import { HighlightDirective } from './directives/highlight.directive';
import { TestComponentComponent } from './components/test-component/test-component.component';
import { RxJSComponent } from './components/rx-js/rx-js.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AslideComponent } from './components/aslide/aslide.component';
import {ThemeListComponent} from "./components/theme-list/theme-list.component";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HighlightDirective,
    TestComponentComponent,
    RxJSComponent,
    HeaderComponent,
    FooterComponent,
    AslideComponent,
    ThemeListComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

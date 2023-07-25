import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HighlightDirective } from './directives/highlight.directive';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ShortenPipe } from './pipes/shorten.pipe';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserModule} from './user/user.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
    UserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [
      AppComponent,
      // HeaderComponent,
      // FooterComponent
  ]
})
export class AppModule { }

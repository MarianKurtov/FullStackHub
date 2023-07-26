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
import { AccessGuard } from './guards/access.guard';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

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
    UserModule
  ],
  providers: [
    AccessGuard
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppModule { }

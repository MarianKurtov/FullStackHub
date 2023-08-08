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
import { IsEmptyDirective } from './directives/is-empty.directive';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { PreparationComponent } from './views/preparation/preparation.component';
import { reducers } from '../+store';
import { environment } from '../environments/environments';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    ShortenPipe,
    IsEmptyDirective,
    NotFoundComponent,
    PreparationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CoreModule,
    UserModule,
    StoreModule.forRoot(reducers),
    environment.production ? [] : StoreDevtoolsModule.instrument()
  ],
  providers: [
    AccessGuard,
    IsEmptyDirective
  ],
  exports: [
    IsEmptyDirective
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class AppModule { }

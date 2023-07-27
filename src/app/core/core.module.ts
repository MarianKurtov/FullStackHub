import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxJSComponent } from './rx-js/rx-js.component';
import { HomeComponent } from '../views/home/home.component';
import { RouterModule} from '@angular/router';
import { PostModule } from '../post/post.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ThemeModule } from '../theme/theme.module';
import { AboutComponent } from '../about/about.component';
import {UserModule} from "../user/user.module";

@NgModule({
  declarations: [
    RxJSComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent
  ],
  exports: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    PostModule,
    ThemeModule
  ]
})
export class CoreModule { }

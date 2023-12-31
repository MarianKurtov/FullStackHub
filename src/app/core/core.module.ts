import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxJSComponent } from './rx-js/rx-js.component';
import { HomeComponent } from '../views/home/home.component';
import { RouterModule} from '@angular/router';
import { PostModule } from '../post/post.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ThemeModule } from '../theme/theme.module';

@NgModule({
  declarations: [
    RxJSComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
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

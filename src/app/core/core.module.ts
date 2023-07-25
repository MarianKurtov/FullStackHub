import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxJSComponent } from './rx-js/rx-js.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { RouterModule} from '@angular/router';
import { PostModule } from '../post/post.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ThemeModule } from '../theme/theme.module';

@NgModule({
  declarations: [
    RxJSComponent,
    NavigationComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    NavigationComponent,
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

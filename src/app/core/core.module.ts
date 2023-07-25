import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxJSComponent } from './rx-js/rx-js.component';
import { ThemeListComponent } from '../theme/theme-list/theme-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { RouterModule} from '@angular/router';
import { AboutComponent } from '../about/about.component';
import {PostModule} from "../post/post.module";

@NgModule({
  declarations: [
    RxJSComponent,
    ThemeListComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
  ],
  exports: [
    ThemeListComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PostModule
  ]
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RxJSComponent } from './rx-js/rx-js.component';
import { AsideComponent } from './aslide/aside.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { UsersComponent } from './users/users.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { RouterModule} from '@angular/router';
import { AboutComponent } from '../about/about.component';

@NgModule({
  declarations: [
    RxJSComponent,
    AsideComponent,
    ThemeListComponent,
    UsersComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
  ],
  exports: [
    ThemeListComponent,
    AsideComponent,
    UsersComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
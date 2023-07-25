import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './about/about.component';
import {AccessGuard} from "./guards/access.guard";
import {ThemeListComponent} from "./theme/theme-list/theme-list.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    component: HomeComponent
  },
  {
    path: 'about',
    canActivate: [AccessGuard],
    component: AboutComponent
  },
  {
    path: 'themes',
    component: ThemeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

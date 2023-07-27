import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './about/about.component';
import { AccessGuard } from './guards/access.guard';
import { ThemeListComponent } from './theme/theme-list/theme-list.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import {DetailComponent} from "./user/detail/detail.component";

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
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  // {
  //   path: 'notfound',
  //   loadChildren: () => import('./views/not-found/not-found.component').then(m => m.NotFoundComponent)
  // },
  // {
  //   path: '**',
  //   redirectTo: '/notfound'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './about/about.component';
import { ThemeListComponent } from './theme/theme-list/theme-list.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { PreparationComponent } from './views/preparation/preparation.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    component: HomeComponent
  },
  {
    path: 'about',
    canActivate: [AuthGuard],
    component: AboutComponent
  },
  {
    path: 'themes',
    component: ThemeListComponent
  },
  {
    path: 'preparation',
    component: PreparationComponent
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: '**',
    redirectTo: 'notfound'
  },
  {
    path: 'notfound',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

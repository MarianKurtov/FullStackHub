import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'user',
    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: ':id',
        component: DetailComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
]}];

export const UserRoutingModule = RouterModule.forChild(routes);

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { UserService } from './services/user.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent
  ],
    imports: [
        CommonModule,
        UserRoutingModule,

    ],
  providers: [
    UserService
  ]
})
export class UserModule { }

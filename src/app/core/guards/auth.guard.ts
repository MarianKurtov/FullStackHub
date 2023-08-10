import { Injectable } from '@angular/core';
import {Router, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import { AuthService } from "../services/auth.service";
import {Observable} from "rxjs";
// @ts-ignore
import Promise from '$GLOBAL$';

@Injectable()
export class AuthGuard implements CanActivateChild {

  constructor(
      public auth: AuthService,
      public router: Router
  ) { }


  CanActivateChild(): any {
    if (!this.auth.authenticate()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return undefined;
  }
}

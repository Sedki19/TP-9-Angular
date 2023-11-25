import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from './services/auth.service';

/* export const pcGuard: CanActivateFn = (route, state) => {
  return true;
}; */
@Injectable({
    providedIn: 'root'
})

export class pcGuard implements CanActivate {
    constructor(private authService: AuthService,
        private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        if (this.authService.isAdmin())
            return true;
        else {
            this.router.navigate(['app-forbidden']);
            return false;
        }
    }
}

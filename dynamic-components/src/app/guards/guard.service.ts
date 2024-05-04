import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth-service.service';
import { Observable } from 'rxjs';
import { ContactComponent } from '../components/contact/contact.component';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate, CanActivateChild, CanDeactivate<IDeactivateComponent> {


  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : boolean | Observable<boolean> | Promise<boolean> {
    if (this.authService.isAuthenticated()) {
      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : boolean | Observable<boolean> | Promise<boolean> {
    return this.canActivate(childRoute, state);
  }

  canDeactivate(
    component: IDeactivateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot)
    : boolean | Observable<boolean> | Promise<boolean> {

    return component.canDeactivate();
  }

}

export interface IDeactivateComponent{
  canDeactivate: () => boolean | Observable<boolean> | Promise<boolean>;
}

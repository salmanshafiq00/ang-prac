import { Component, inject } from "@angular/core"
import { AuthService } from "../services/auth-service.service"
import { Router } from "@angular/router";
import { IDeactivateComponent } from "./guard.service";

export const authGuard = () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if(authService.isAuthenticated()){
        return true;
    }else{
        router.navigate(['/login']);
        return false;
    }
}

export const childAuthGuard = () => {
    return authGuard();
}

export const canDeactivate = (component: IDeactivateComponent) => {
    component.canDeactivate();
}
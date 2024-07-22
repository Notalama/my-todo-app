import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { getCurrentUser } from '@aws-amplify/auth'; // Import from @aws-amplify/auth

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const userData = getCurrentUser();
        return userData
            .then((res) => {
                console.log(res);
                return true;
            })
            .catch(() => {
                this.router.navigate(['/login']);
                return false;
            });
    }
}

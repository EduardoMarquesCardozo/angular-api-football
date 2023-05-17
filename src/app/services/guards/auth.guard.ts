import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service';



@Injectable({ providedIn: 'root' })
export class AuthGuard {
    constructor(
        private router: Router,
        private auth: AuthService
    ) { }

    canActivate() {
        const key = this.auth.keyValue;
        if (key) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }

}
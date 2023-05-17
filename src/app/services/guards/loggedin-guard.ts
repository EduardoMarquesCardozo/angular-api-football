import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service';



@Injectable({ providedIn: 'root' })
export class LoggedinGuard {
    constructor(
        private router: Router,
        private auth: AuthService
    ) { }

    canActivate() {
        const key = this.auth.keyValue;
        if (key) {
            this.router.navigate(['/country']);
            return false;
        }
        
        return true;
    }
}
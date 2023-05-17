import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map, catchError  } from 'rxjs/operators';
import { BehaviorSubject, Observable } from "rxjs";
import { Router } from "@angular/router";
import { environment } from "../environments/environment";
import { ILoginResponse } from "../data/key";

@Injectable({ providedIn: 'root' })
export class AuthService {
    private keySubject: BehaviorSubject<String>;
    public key: Observable<String>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.keySubject = new BehaviorSubject(JSON.parse(localStorage.getItem('key')!));
        this.key = this.keySubject.asObservable();
    }

    public get userValue() {
        return this.keySubject.value;
    }
      
    login(key:string ) {
        let config = {headers: {'x-rapidapi-key': key}};
        return this.http.get<ILoginResponse>(`${environment.apiUrl}/status`, config)
        .pipe(map(response => {
            if(response.errors.token){
                return response;
            }
            localStorage.setItem('key', JSON.stringify(key));
            this.keySubject.next(key);
            return key;
        }));
    }

    logout() {
        localStorage.removeItem("key");
        this.keySubject.next('');
        this.router.navigate(['/login']);
    }
}
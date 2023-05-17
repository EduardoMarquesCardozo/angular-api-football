import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map  } from 'rxjs/operators';
import { environment } from "../environments/environment";
import { ISeasons } from "../data/season";

@Injectable({ providedIn: 'root' })
export class SeasonService {

    constructor(private http: HttpClient) {}
      
    listSeasons() {
        return this.http.get<ISeasons>(`${environment.apiUrl}/leagues/seasons`)
        .pipe(map(response => {
            return response.response;
        }));
    }
}
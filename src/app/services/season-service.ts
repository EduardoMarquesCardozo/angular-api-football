import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map  } from 'rxjs/operators';
import { environment } from "../environments/environment";
import { IPaginationList } from "../data/paging";

@Injectable({ providedIn: 'root' })
export class SeasonService {

    constructor(private http: HttpClient) {}
      
    listSeasons() {
        return this.http.get<IPaginationList<number>>(`${environment.apiUrl}/leagues/seasons`)
        .pipe(map(response => {
            return response.response;
        }));
    }
}
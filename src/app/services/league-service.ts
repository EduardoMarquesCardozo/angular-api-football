import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map  } from 'rxjs/operators';
import { environment } from "../environments/environment";
import { IPaginationList } from "../data/paging";
import { LeagueResponse } from "../data/league";

@Injectable({ providedIn: 'root' })
export class LeagueService {

    constructor(private http: HttpClient) {}
      
    listLeagues(country: string, season: number = 0) {
        return this.http.get<IPaginationList<LeagueResponse>>(`${environment.apiUrl}/leagues?country=${country}${season != 0 ? `&season=${season}`:``}`)
        .pipe(map(response => {
            return response.response;
        }));
    }
}
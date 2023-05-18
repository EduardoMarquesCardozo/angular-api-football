import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map  } from 'rxjs/operators';
import { environment } from "../environments/environment";
import { IPaginationList } from "../data/paging";
import { TeamsResponse } from "../data/teams";

@Injectable({ providedIn: 'root' })
export class TeamService {

    constructor(private http: HttpClient) {}
      
    listTeams(league: number, season: number) {
        return this.http.get<IPaginationList<TeamsResponse>>(`${environment.apiUrl}/teams?league=${league}&season=${season}`)
        .pipe(map(response => {
            return response.response;
        }));
    }
}
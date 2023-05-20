import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map  } from 'rxjs/operators';
import { environment } from "../environments/environment";
import { IPaginationList } from "../data/paging";
import { PlayerResponse } from "../data/player";

@Injectable({ providedIn: 'root' })
export class PlayerService {

    constructor(private http: HttpClient) {}
      
    listPlayers(league: number, team: number, season: number) {
        return this.http.get<IPaginationList<PlayerResponse>>(`${environment.apiUrl}/teams?league=${league}&season=${season}&team=${team}`)
        .pipe(map(response => {
            return response.response;
        }));
    }
}
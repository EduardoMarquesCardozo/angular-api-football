import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map  } from 'rxjs/operators';
import { environment } from "../environments/environment";
import {  IPaginationStatistics } from "../data/paging";
import { StatisticResponse } from "../data/statistc";

@Injectable({ providedIn: 'root' })
export class StatisticsService {

    constructor(private http: HttpClient) {}
      
    listStatistics(league: number, team: number, season: number) {
        return this.http.get<IPaginationStatistics<StatisticResponse>>(`${environment.apiUrl}/teams/statistics?league=${league}&season=${season}&team=${team}`)
        .pipe(map(response => {
            return response.response;
        }));
    }
}
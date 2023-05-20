import { Injectable } from '@angular/core';
import { StatisticResponse } from '../data/statistc';
import { PlayerResponse } from '../data/player';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class SharingService{    
    private playerData = new BehaviorSubject<PlayerResponse[] | undefined>(undefined);
    private statisticsData = new BehaviorSubject<StatisticResponse | undefined>(undefined);

    setPlayerData(playerData: PlayerResponse[] ): void {
        this.playerData.next(playerData);
    }

    getPlayerData(): Observable<PlayerResponse[] | undefined> {
        return this.playerData.asObservable();
    }
    
    setStatisticsData(statisticsData: StatisticResponse): void {
        this.statisticsData.next(statisticsData);
    }

    getStatisticsData(): Observable<StatisticResponse | undefined> {
        return this.statisticsData.asObservable();
    }
}
import { Injectable } from '@angular/core';
import { StatisticResponse } from '../data/statistc';
import { PlayerResponse } from '../data/player';

@Injectable()
export class SharingService{
    private player:PlayerResponse[] | undefined;
    private statistics:StatisticResponse | undefined;

    setPlayers(player:PlayerResponse[]){
        this.player = player;
    }

    getPlayers():any{
        return this.player;
    }

    setStatistics(statistics:StatisticResponse){
        this.statistics = statistics;
    }

    getStatistics():any{
        return this.statistics;
    }
}
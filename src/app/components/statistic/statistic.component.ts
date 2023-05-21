import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { StaticsMOCK } from 'src/app/data/mock';
import { Lineup, StatisticResponse } from 'src/app/data/statistc';
import { SharingService } from 'src/app/services/home-service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit{
  statistics$?: Observable<StatisticResponse | undefined>;
  lineup$?: Observable<Lineup[]>;
  
  constructor(private sharingService:SharingService) {}
  ngOnInit(): void {
    this.statistics$ = this.sharingService.getStatisticsData();
    this.lineup$ = this.statistics$.pipe(map(
      respose =>{
        return respose!.lineups.sort((a, b) => b.played-a.played )
      }
    ))
  }

}

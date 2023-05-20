import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { StaticsMOCK } from 'src/app/data/mock';
import { Lineup, StatisticResponse } from 'src/app/data/statistc';
import { SharingService } from 'src/app/services/home-service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit{
  statistics?: StatisticResponse;
  lineup?: Lineup[];
  
  constructor(private sharingService:SharingService) {}
  ngOnInit(): void {
    this.sharingService.getStatisticsData().subscribe(statistic => {
      this.lineup = statistic!.lineups.sort((a, b) => b.played-a.played )
    })
  }
  
}

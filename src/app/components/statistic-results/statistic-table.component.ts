import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { StaticsMOCK } from 'src/app/data/mock';
import { Fixtures, StatisticResponse } from 'src/app/data/statistc';
import { SharingService } from 'src/app/services/home-service';

@Component({
  selector: 'app-statistic-table',
  templateUrl: './statistic-table.component.html',
  styleUrls: ['./statistic-table.component.scss']
})
export class StatisticTableComponent implements OnInit {
  statistics$?: Observable<StatisticResponse | undefined>;
  fixtures$?: Observable<Fixtures> ;
  
  constructor(private sharingService:SharingService) {}

  ngOnInit(): void {
    this.statistics$ = this.sharingService.getStatisticsData();
    this.fixtures$ = this.statistics$.pipe(map(
      respose =>{
        return respose!.fixtures
      }
    ))
  }
}

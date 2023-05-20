import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { StaticsMOCK } from 'src/app/data/mock';
import { Fixtures, StatisticResponse } from 'src/app/data/statistc';
import { SharingService } from 'src/app/services/home-service';

@Component({
  selector: 'app-statistic-table',
  templateUrl: './statistic-table.component.html',
  styleUrls: ['./statistic-table.component.scss']
})
export class StatisticTableComponent implements OnInit {
  statistics?: StatisticResponse;
  constructor(private sharingService:SharingService) {}

  fixtures?: Fixtures ;

  ngOnInit(): void {
    this.sharingService.getStatisticsData().subscribe(statistic => {
      this.fixtures = statistic!.fixtures
    })
  }
}

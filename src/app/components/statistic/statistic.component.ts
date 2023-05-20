import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { StaticsMOCK } from 'src/app/data/mock';
import { Lineup, StatisticResponse } from 'src/app/data/statistc';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit{
  
  @Input() statistics!: StatisticResponse;
  lineup: Lineup[] | undefined;
  ngOnInit(): void {
    console.log("AAAAAAAAAAA", this.statistics);
    this.lineup = this.statistics!.lineups.sort((a, b) => b.played-a.played )
  }

}

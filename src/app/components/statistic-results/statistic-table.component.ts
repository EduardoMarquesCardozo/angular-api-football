import { AfterViewInit, Component, Input } from '@angular/core';
import { StaticsMOCK } from 'src/app/data/mock';
import { Fixtures, StatisticResponse } from 'src/app/data/statistc';

@Component({
  selector: 'app-statistic-table',
  templateUrl: './statistic-table.component.html',
  styleUrls: ['./statistic-table.component.scss']
})
export class StatisticTableComponent implements AfterViewInit {
  @Input() statistics: StatisticResponse | undefined;

  fixtures: Fixtures | undefined ;

  ngAfterViewInit(): void {
    this.fixtures = this.statistics!.fixtures
  }

}

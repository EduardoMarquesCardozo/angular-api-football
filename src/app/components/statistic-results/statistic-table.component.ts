import { Component } from '@angular/core';
import { StaticsMOCK } from 'src/app/data/mock';

@Component({
  selector: 'app-statistic-table',
  templateUrl: './statistic-table.component.html',
  styleUrls: ['./statistic-table.component.scss']
})
export class StatisticTableComponent {

  results = StaticsMOCK.fixtures;

}

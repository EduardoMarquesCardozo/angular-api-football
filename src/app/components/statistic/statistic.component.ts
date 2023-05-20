import { Component } from '@angular/core';
import { StaticsMOCK } from 'src/app/data/mock';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent {

  lineup = StaticsMOCK.lineups.sort((a, b) => b.played-a.played );

}

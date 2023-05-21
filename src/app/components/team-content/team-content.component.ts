import { Component } from '@angular/core';
import { SharingService } from 'src/app/services/home-service';

@Component({
  selector: 'app-team-content',
  templateUrl: './team-content.component.html',
  styleUrls: ['./team-content.component.scss']
})
export class TeamContentComponent  {

  currentTab: 0 | 1 | 2 | 3 | 4 = 0 ;

  constructor(private sharingService:SharingService,) {}

  changeTab(tab:  0 | 1 | 2 | 3 | 4){
    let data;
    this.sharingService.getStatisticsData().subscribe(statistic => {
      data = statistic;
    })
    if(!data){
      return;
    }
    this.currentTab = tab;
  }
}

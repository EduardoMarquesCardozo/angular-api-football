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
  playerList = this.sharingService.getPlayers();
  statistics = this.sharingService.getStatistics();

  changeTab(tab:  0 | 1 | 2 | 3 | 4){
    if(!this.sharingService.getPlayers() && !this.sharingService.getStatistics()){
      return;
    }
    console.log(this.sharingService.getPlayers(), this.sharingService.getStatistics());
    this.playerList = this.sharingService.getPlayers();
    this.statistics = this.sharingService.getStatistics();
    this.currentTab = tab;
  }
}

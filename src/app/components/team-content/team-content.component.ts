import { Component } from '@angular/core';

@Component({
  selector: 'app-team-content',
  templateUrl: './team-content.component.html',
  styleUrls: ['./team-content.component.scss']
})
export class TeamContentComponent  {
  currentTab: 0 | 1 | 2 | 3 | 4 = 0 ;

}

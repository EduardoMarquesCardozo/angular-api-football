import { Component } from '@angular/core';
import { PlayersMOCK } from 'src/app/data/mock';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent {

  playerList = PlayersMOCK;

}

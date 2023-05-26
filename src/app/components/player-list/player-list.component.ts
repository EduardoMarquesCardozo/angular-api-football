import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayersMOCK } from 'src/app/data/mock';
import { PlayerResponse } from 'src/app/data/player';
import { SharingService } from 'src/app/services/home-service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent implements OnInit {
  playerList$?: Observable<PlayerResponse[] | undefined>;

  constructor(private sharingService: SharingService) {}

  ngOnInit(): void {
    this.playerList$ = this.sharingService.getPlayerData();
  }
}

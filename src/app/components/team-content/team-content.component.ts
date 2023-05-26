import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharingService } from 'src/app/services/home-service';

@Component({
  selector: 'app-team-content',
  templateUrl: './team-content.component.html',
  styleUrls: ['./team-content.component.scss'],
})
export class TeamContentComponent implements OnInit, OnDestroy {
  subscription?: Subscription;

  currentTab: 0 | 1 | 2 | 3 | 4 = 0;

  constructor(private sharingService: SharingService) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.sharingService
      .getStatisticsData()
      .subscribe((statistic) => {
        this.changeTab(1);
      });
  }

  changeTab(tab: 0 | 1 | 2 | 3 | 4) {
    let data;
    this.sharingService.getStatisticsData().subscribe((statistic) => {
      data = statistic;
    });
    if (!data) {
      return;
    }
    this.currentTab = tab;
  }
}

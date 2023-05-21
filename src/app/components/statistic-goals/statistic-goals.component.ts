import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { StaticsMOCK } from 'src/app/data/mock';
import { Chart, registerables, ChartData } from 'chart.js';
import { Goals, StatisticResponse } from 'src/app/data/statistc';
import { SharingService } from 'src/app/services/home-service';
import { Subscription } from 'rxjs';

Chart.register(... registerables)

@Component({
  selector: 'app-statistic-goals',
  templateUrl: './statistic-goals.component.html',
  styleUrls: ['./statistic-goals.component.scss']
})
export class StatisticGoalsComponent implements OnInit, OnDestroy {
  subscription?: Subscription;
  statistics?: StatisticResponse;

  chart: Chart | undefined;
  goals?:Goals;
  minutes: string []= [];
  goalsTotal: number []= [];

  constructor(private sharingService:SharingService) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.sharingService.getStatisticsData().subscribe(statistic => {
      this.goals = statistic!.goals;
    })
    this.fillData();
    this.createChart();

  }

  fillData() {
    let data = this.goals!.against.minute;
    type KeyType = "0-15" | "16-30" | "31-45" | "46-60" | "61-75" | "76-90" | "91-105" | "106-120";

    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        let keyTyped = key as KeyType;
        this.minutes.push(keyTyped);
        let total = data[keyTyped]?.total;
        if (total !== null) {
          this.goalsTotal.push(total);
        }
        else{
          this.goalsTotal.push(0);
        }
      }
    }
  }


  createChart(){
    this.chart = new Chart('chart', {
      type: 'bar',
      data: {
        labels: this.minutes,
        datasets: [{
          label: 'Gols por minuto',
          data: this.goalsTotal,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}

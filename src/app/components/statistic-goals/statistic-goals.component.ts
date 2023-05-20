import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { StaticsMOCK } from 'src/app/data/mock';
import { Chart, registerables, ChartData } from 'chart.js';
import { Goals, StatisticResponse } from 'src/app/data/statistc';

Chart.register(... registerables)

@Component({
  selector: 'app-statistic-goals',
  templateUrl: './statistic-goals.component.html',
  styleUrls: ['./statistic-goals.component.scss']
})
export class StatisticGoalsComponent implements AfterViewInit {
  @Input() statistics: StatisticResponse | undefined;

  chart: Chart | undefined;
  goals:Goals | undefined;
  minutes: string []= [];
  goalsTotal: number []= [];

  ngAfterViewInit(): void {
    this.goals = this.statistics!.goals;
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
        console.log(`Total for ${keyTyped}: ${total}`);
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

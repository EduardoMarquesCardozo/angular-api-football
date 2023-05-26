import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SharingService } from 'src/app/services/home-service';
import { StatisticGoalsComponent } from './statistic-goals.component';
import { StatisticResponse } from 'src/app/data/statistc';

describe('StatisticGoalsComponent', () => {
  let component: StatisticGoalsComponent;
  let fixture: ComponentFixture<StatisticGoalsComponent>;
  let sharingService: SharingService;

  const fakeStatisticResponse: StatisticResponse = {
    league: {
      id: 1,
      name: 'some league',
      country: 'some country',
      logo: 'some logo',
      flag: 'some flag',
      season: 2023,
    },
    team: {
      id: 1,
      name: 'some team',
      logo: 'some logo',
    },
    form: 'WDL',
    fixtures: {
      played: { home: 10, away: 10, total: 20 },
      wins: { home: 5, away: 5, total: 10 },
      draws: { home: 2, away: 2, total: 4 },
      loses: { home: 3, away: 3, total: 6 },
    },
    goals: {
      for: {
        total: { home: 10, away: 10, total: 20 },
        average: { home: '1.0', away: '1.0', total: '1.0' },
        minute: {
          '0-15': { total: 1, percentage: '10%' },
          '16-30': { total: 1, percentage: '10%' },
          '31-45': { total: 1, percentage: '10%' },
          '46-60': { total: 1, percentage: '10%' },
          '61-75': { total: 1, percentage: '10%' },
          '76-90': { total: 1, percentage: '10%' },
          '91-105': { total: 1, percentage: '10%' },
          '106-120': { total: 1, percentage: '10%' },
        },
      },
      against: {
        total: { home: 10, away: 10, total: 20 },
        average: { home: '1.0', away: '1.0', total: '1.0' },
        minute: {
          '0-15': { total: 1, percentage: '10%' },
          '16-30': { total: 1, percentage: '10%' },
          '31-45': { total: 1, percentage: '10%' },
          '46-60': { total: 1, percentage: '10%' },
          '61-75': { total: 1, percentage: '10%' },
          '76-90': { total: 1, percentage: '10%' },
          '91-105': { total: 1, percentage: '10%' },
          '106-120': { total: 1, percentage: '10%' },
        },
      },
    },
    biggest: {
      streak: {
        wins: 3,
        draws: 2,
        loses: 1,
      },
      wins: {
        home: '5',
        away: '5',
      },
      loses: {
        home: '3',
        away: '3',
      },
      goals: {
        for: {
          home: 10,
          away: 10,
        },
        against: {
          home: 10,
          away: 10,
        },
      },
    },
    clean_sheet: {
      home: 5,
      away: 5,
      total: 10,
    },
    failed_to_score: {
      home: 3,
      away: 3,
      total: 6,
    },
    penalty: {
      scored: {
        total: 5,
        percentage: '50%',
      },
      missed: {
        total: 5,
        percentage: '50%',
      },
      total: 10,
    },
    lineups: [
      {
        formation: '4-3-3',
        played: 10,
      },
    ],
  };

  beforeEach(async () => {
    const sharingServiceSpy = jasmine.createSpyObj('SharingService', [
      'getStatisticsData',
    ]);
    await TestBed.configureTestingModule({
      declarations: [StatisticGoalsComponent],
      providers: [{ provide: SharingService, useValue: sharingServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(StatisticGoalsComponent);
    component = fixture.componentInstance;
    sharingService = TestBed.inject(SharingService as any);
  });

  beforeEach(() => {
    (sharingService.getStatisticsData as jasmine.Spy).and.returnValue(
      of(fakeStatisticResponse)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve data from the sharing service', () => {
    expect(sharingService.getStatisticsData).toHaveBeenCalled();
  });

  it('should fill minutes and goalsTotal arrays', () => {
    expect(component.minutes.length).toBeGreaterThan(0);
    expect(component.goalsTotal.length).toBeGreaterThan(0);
  });

  it('should create chart with correct data', () => {
    expect(component.chart).toBeTruthy();
    expect(component.chart?.data.labels).toEqual(component.minutes);
    expect(component.chart?.data.datasets[0].data).toEqual(
      component.goalsTotal
    );
  });
});

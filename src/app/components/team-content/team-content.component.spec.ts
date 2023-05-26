import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { SharingService } from 'src/app/services/home-service';
import { TeamContentComponent } from './team-content.component';
import { StatisticResponse } from 'src/app/data/statistc';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PlayerListComponent } from '../player-list/player-list.component';

describe('TeamContentComponent', () => {
  let component: TeamContentComponent;
  let fixture: ComponentFixture<TeamContentComponent>;
  let mockSharingService: jasmine.SpyObj<SharingService>;

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
      'getPlayerData',
    ]);

    TestBed.configureTestingModule({
      declarations: [TeamContentComponent, PlayerListComponent],
      providers: [{ provide: SharingService, useValue: sharingServiceSpy }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    mockSharingService = TestBed.inject(
      SharingService
    ) as jasmine.SpyObj<SharingService>;
    mockSharingService.getStatisticsData.and.returnValue(
      of(fakeStatisticResponse)
    );
    // mockSharingService.getPlayerData.and.returnValue(
    //   of(StaticsMOCK)
    // );
    fixture = TestBed.createComponent(TeamContentComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change tab when statistic data is received', () => {
    mockSharingService.getStatisticsData.and.returnValue(
      of(fakeStatisticResponse)
    );
    fixture.detectChanges();

    expect(component.currentTab).toBe(1);
  });

  it('should not change tab when statistic data is not received', () => {
    mockSharingService.getStatisticsData.and.returnValue(of(undefined));
    fixture.detectChanges();

    expect(component.currentTab).toBe(0);
  });

  it('should highlight the button of the selected tab', () => {
    component.currentTab = 1;
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('.selected'));
    expect(buttonElement.nativeElement.textContent).toContain(
      'Lista de jogadores'
    );
  });
});

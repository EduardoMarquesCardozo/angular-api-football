import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { CountryService } from 'src/app/services/country-service';
import { SeasonService } from 'src/app/services/season-service';
import { LeagueService } from 'src/app/services/league-service';
import { TeamService } from 'src/app/services/team-service';
import { PlayerService } from 'src/app/services/player-service';
import { StatisticsService } from 'src/app/services/statistics-service';
import { SharingService } from 'src/app/services/home-service';

import { FilterComponent } from './filter.component';
import { of } from 'rxjs';
import { PlayersMOCK, StaticsMOCK } from '../../data/mock';

class CountryServiceMock {
  listCountries() {
    return of({
      response: [
        { id: 1, name: 'Russia' },
        { id: 2, name: 'Ukraine' },
      ],
    });
  }
}

class SeasonServiceMock {
  listSeasons() {
    return of([1986, 1980]);
  }
}

class LeagueServiceMock {
  listLeagues(country: string, season: number) {
    if (country === 'Russia' && season === 1986) {
      return of([{ league: { id: 39, name: 'Premier League' } }]);
    } else {
      return of([]);
    }
  }
}

class TeamServiceMock {
  listTeams(leagueId: number, season: number) {
    if (leagueId === 39 && season === 1986) {
      return of([{ team: { id: 50, name: 'Manchester City' } }]);
    } else {
      return of([]);
    }
  }
}

class PlayerServiceMock {
  listPlayers(leagueId: number, teamId: number, season: number) {
    return of(PlayersMOCK);
  }
}

class StatisticsServiceMock {
  listStatistics(leagueId: number, teamId: number, season: number) {
    return of(StaticsMOCK);
  }
}

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [FilterComponent],
      providers: [
        { provide: CountryService, useClass: CountryServiceMock },
        { provide: SeasonService, useClass: SeasonServiceMock },
        { provide: LeagueService, useClass: LeagueServiceMock },
        { provide: TeamService, useClass: TeamServiceMock },
        { provide: PlayerService, useClass: PlayerServiceMock },
        { provide: StatisticsService, useClass: StatisticsServiceMock },
        SharingService,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load countryList from CountryService', () => {
    component.ngOnInit();
    expect(component.countries.length).toEqual(2);
  });

  it('should load seasonList from SeasonService', () => {
    component.ngOnInit();
    expect(component.seasons.length).toEqual(2);
  });

  it('should disable the button when both inputs are empty', () => {
    component.countryValue = '';
    component.seasonValue = '';
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.ps');
    expect(button.disabled).toBeTruthy();
  });

  it('should enable the button when both inputs have values', () => {
    component.countryValue = 'Russia';
    component.seasonValue = '1986';
    component.listLeague();
    component.leagueValue = 'Premier League';
    component.listTeams();
    component.teamValue = 'Manchester City';
    fixture.detectChanges();

    const button = fixture.nativeElement.querySelector('.ps');
    expect(button.disabled).toBeFalsy();
  });
});

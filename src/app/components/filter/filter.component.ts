import { Component, OnInit } from '@angular/core';
import { CountryResponse } from 'src/app/data/country';
import { LeagueResponse } from 'src/app/data/league';
import { TeamsResponse } from 'src/app/data/teams';
import { CountryService } from 'src/app/services/country-service';
import { SharingService } from 'src/app/services/home-service';
import { LeagueService } from 'src/app/services/league-service';
import { SeasonService } from 'src/app/services/season-service';
import { TeamService } from 'src/app/services/team-service';
import { PlayerService } from 'src/app/services/player-service';
import { StatisticsService } from 'src/app/services/statistics-service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  error: boolean = false;
  countryValue: string = '';
  seasonValue: string = '';
  leagueValue: string = '';
  teamValue: string = '';
  countries: CountryResponse[] = [];
  seasons: number[] = [];
  leagues: LeagueResponse[] = [];
  teams: TeamsResponse[] = [];

  constructor(
    private countryService: CountryService,
    private seasonService: SeasonService,
    private leagueService: LeagueService,
    private teamService: TeamService,
    private playerService: PlayerService,
    private statisticsService: StatisticsService,
    private sharingService: SharingService
  ) {}

  ngOnInit(): void {
    this.listCountries();
    this.listSeasons();
  }

  listSeasons() {
    this.seasonService.listSeasons().subscribe((val) => {
      this.seasons = val;
    });
  }

  listCountries() {
    this.countryService.listCountries().subscribe((val) => {
      this.countries = val.response;
    });
  }

  areValuesFilled() {
    let country = this.countries.find((x) => x?.name === this.countryValue);
    let season = this.seasons.find((x) => x === parseInt(this.seasonValue));
    if (country && season) {
      return true;
    }
    return false;
  }
  areAllValuesFilled() {
    let country = this.countries.find((x) => x?.name === this.countryValue);
    let season = this.seasons.find((x) => x === parseInt(this.seasonValue));
    let league = this.leagues.find((x) => x?.league.name === this.leagueValue);
    let team = this.teams.find((x) => x?.team.name === this.teamValue);
    if (country && season && league && team) {
      return true;
    }
    return false;
  }

  listLeague() {
    if (this.areValuesFilled()) {
      this.leagueService
        .listLeagues(this.countryValue, parseInt(this.seasonValue))
        .subscribe((val) => {
          this.leagues = val;
        });
    }
  }

  listTeams() {
    let league = this.leagues.find((x) => x?.league.name === this.leagueValue);
    if (!!league) {
      this.teamService
        .listTeams(league.league.id, parseInt(this.seasonValue))
        .subscribe((val) => {
          this.teams = val;
        });
    }
  }

  search() {
    let league = this.leagues.find((x) => x?.league.name === this.leagueValue);
    let team = this.teams.find((x) => x?.team.name === this.teamValue);
    if (!!team && !!league) {
      this.playerService
        .listPlayers(league.league.id, team.team.id, parseInt(this.seasonValue))
        .subscribe((val) => {
          this.sharingService.setPlayerData(val);
        });
      this.statisticsService
        .listStatistics(
          league.league.id,
          team.team.id,
          parseInt(this.seasonValue)
        )
        .subscribe((val) => {
          this.sharingService.setStatisticsData(val);
        });

      this.error = false;
      return;
    }
    this.error = true;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryResponse } from 'src/app/data/country';
import { LeagueResponse } from 'src/app/data/league';
import { TeamsResponse } from 'src/app/data/teams';
import { CountryService } from 'src/app/services/country-service';
import { LeagueService } from 'src/app/services/league-service';
import { SeasonService } from 'src/app/services/season-service';
import { TeamService } from 'src/app/services/team-service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  error: boolean =false;
  countryValue: string ='';
  seasonValue: string ='';
  leagueValue: string ='';
  teamValue: string ='';
  countries: CountryResponse[] =[];
  seasons: number[] =[];
  leagues: LeagueResponse[] =[];
  teams: TeamsResponse[] =[];
  
  constructor(
    private router: Router, 
    private countryService: CountryService, 
    private seasonService: SeasonService,
    private leagueService: LeagueService,
    private teamService: TeamService,) {}

  ngOnInit(): void {
    this.listCountries();
    this.listSeasons();
  }

  listSeasons(){
    this.seasonService.listSeasons()
    .subscribe(
        (val) => {
          this.seasons = val;
        }
    );
  }

  listCountries(){
      this.countryService.listCountries()
      .subscribe(
          (val) => {
            this.countries = val.response;
          }
      );
  }

  isValuesFilled(){
    let country = this.countries.find(x => x?.name === this.countryValue);
    let season = this.seasons.find(x => x === parseInt(this.seasonValue));
    if(country && season){
      return true;
    }
    return false;
  }

  getSeasonValue(){
    let season = this.seasons.find(x => x === parseInt(this.seasonValue));
    return season;
  }

  isCountryFilled(){
    let country = this.countries.find(x => x?.name === this.countryValue);
    return !!country;
  }

  searchLeague(){
    if(this.isCountryFilled()){
      this.leagueService.listLeagues(this.countryValue, this.getSeasonValue())
      .subscribe(
          (val) => {
            this.leagues = val;
          }
      );
    }
  }

  searchTeams(){
    let league = this.leagues.find(x => x?.league.name === this.leagueValue);
    if(!!league){
      this.teamService.listTeams(league.league.id, parseInt(this.seasonValue))
      .subscribe(
          (val) => {
            this.teams = val;
          }
      );
    }
  }

  search(){
    if(this.isValuesFilled()){
      this.error = false;
      return;
    }
    this.error = true;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryList } from 'src/app/data/country';
import { CountryService } from 'src/app/services/country-service';
import { LeagueService } from 'src/app/services/league-service';
import { SeasonService } from 'src/app/services/season-service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  error: boolean =false;
  countryValue: string ='';
  seasonValue: string ='';
  countries: CountryList[] =[];
  seasons: number[] =[];
  
  constructor(
    private router: Router, 
    private countryService: CountryService, 
    private seasonService: SeasonService,
    private leagueService: LeagueService ) {}

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
            console.log(val);
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

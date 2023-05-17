import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryList } from 'src/app/data/country';
import { CountryService } from 'src/app/services/country-service';
import { SeasonService } from 'src/app/services/season-service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  error: boolean =false;
  codeValue: string ='';
  seasonValue: string ='';
  countries: CountryList[] =[];
  seasons: number[] =[];
  
  constructor(private router: Router, private contryService: CountryService , private seasonService: SeasonService ) {}

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
      this.contryService.listCountries()
      .subscribe(
          (val) => {
            this.countries = val.response;
          }
      );
  }

  isValuesFilled(){
    let country = this.countries.find(x => x?.name === this.codeValue);
    let season = this.seasons.find(x => x === parseInt(this.seasonValue));
    if(country && season){
      return false;
    }
    return true;
  }

  search(){
    if(!this.isValuesFilled()){
      this.error = false;
      return;
    }
    this.error = true;
  }
}

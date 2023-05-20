import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IPaginationList } from 'src/app/data/paging';
import { CountryResponse } from 'src/app/data/country';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CountryService } from 'src/app/services/country-service';
import { SeasonService } from 'src/app/services/season-service';
import { FilterComponent } from './filter.component';

class CountryServiceMock {
  listCountries() {
    const countryList: IPaginationList<CountryResponse> = {
      get: "countries",
      parameters: [],
      errors: [],
      results: 167,
      paging: {
        current: 1,
        total: 1
      },
      response: [
        {
          "name": "Albania",
          "code": "AL",
          "flag": "https:\/\/media-3.api-sports.io\/flags\/al.svg"
        },
        {
          "name": "Algeria",
          "code": "DZ",
          "flag": "https:\/\/media-3.api-sports.io\/flags\/dz.svg"
        }
      ]
    };
    return of(countryList);
  }
}

class SeasonServiceMock {
  listSeasons() {
    const seasonList: IPaginationList<Number> = {
      get: "leagues\/seasons",
      parameters: [],
      errors: [],
      results: 18,
      paging: {
        current: 1,
        total: 1
      },
      response: [
        2008,
        2009,
      ]
    };
    return of(seasonList);
  }
}


describe('CountriesComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ FilterComponent ],
      providers: [{ provide: CountryService, useClass: CountryServiceMock }, { provide: SeasonService, useClass: SeasonServiceMock },],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should load countryList from CountryService', () => {
  //   expect(component.countries.length).toEqual(2);
  // });

  // it('should load seasonList from SeasonService', () => {
  //   expect(component.seasons.length).toEqual(2);
  // });

  // it('should disable the button when both inputs are empty', () => {
  //   component.countryValue = '';
  //   component.seasonValue = '';
  //   fixture.detectChanges();
  
  //   const button = fixture.nativeElement.querySelector('.ps');
  //   expect(button.disabled).toBeTruthy();
  // });
  
  // it('should enable the button when both inputs have values', () => {
  //   component.countryValue = 'Albania';
  //   component.seasonValue = '2008';
  //   fixture.detectChanges();
  
  //   const button = fixture.nativeElement.querySelector('.ps');
  //   expect(button.disabled).toBeFalsy();
  // });
});

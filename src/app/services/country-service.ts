import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map  } from 'rxjs/operators';
import { environment } from "../environments/environment";
import { CountryList } from "../data/country";
import { IPaginationList } from "../data/paging";

@Injectable({ providedIn: 'root' })
export class CountryService {

    constructor(private http: HttpClient) {}
      
    listCountries() {
        return this.http.get<IPaginationList<CountryList>>(`${environment.apiUrl}/countries`)
        .pipe(map(response => {
            return response;
        }));
    }
}
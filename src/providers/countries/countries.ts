import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the CountriesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CountriesProvider {

	countries:any 

  constructor(public http: HttpClient) {
    console.log('Hello CountriesProvider Provider');
  }

  getAllCountries(): Promise<any>{
  		return this.http.get('https://restcountries.eu/rest/v2/all').toPromise()
  }

}

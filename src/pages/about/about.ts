import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CountriesProvider } from '../../providers/countries/countries'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

	countrie:any

  constructor(public navCtrl: NavController, public countriesProvider: CountriesProvider) {

  		this.loadCountrie();

  }

  loadCountrie(){
  	this.countriesProvider.getAllCountries()
  	.then(data => {
  		this.countrie = data;
  	});
  }

}

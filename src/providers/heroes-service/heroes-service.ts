import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HeroesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HeroesServiceProvider {

	heroes:any

  constructor(public http: HttpClient) {
    console.log('Hello HeroesServiceProvider Provider');
  }

  getAllHeroes(forceReload:boolean){
  	if(forceReload){
  	
	  	this.heroes = [{
			"realname": "Bruce Wayne",
			"name": "Batman",
			"cover": "http://img.filmsactu.net/datas/films/l/a/la-ligue-des-justiciers/xl/la-ligue-des-justiciers-photo-586a9788c70f3.jpg",
			"editor": "DC",
			"movies": [
				{"title": "The Dark Knight Rises", "releaseDate":"2012-07-05"},
				{"title": "The Dark Knight", "releaseDate":"2008-08-13"},
				{"title": "Batman Begins", "releaseDate":"2005-06-15"}
			]
		},
		{
			"realname": "Clarc Kent",
			"name": "Superman",
			"cover": "http://img.over-blog-kiwi.com/1/21/25/91/20160324/ob_4c88ef_2e605349cb7836691e6e6321e8789113-large.jpeg",
			"editor": "DC",
			"movies": [
				{"title": "Man of steel", "releaseDate":"2006-07-05"},
				{"title": "Batman vs Superman", "releaseDate":"2008-08-13"}
			]
		},
		{
			"realname": "Tony Starc",
			"name": "Iron Man",
			"cover": "https://static1.squarespace.com/static/583c906ebe659429d1106265/t/5935941859cc687293cd3f6b/1496683572683/?format=750w",
			"editor": "Marvel",
			"movies": [
				{"title": "Iron man ", "releaseDate":"2010-07-05"},
				{"title": "Iron man 2 ", "releaseDate":"2011-08-13"},
				{"title": "Iron man3", "releaseDate":"2012-06-15"}
			]
		}]
	}
	return this.heroes;

  }

}

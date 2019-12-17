import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cities: any;

  constructor() { }

  ngOnInit() {
    this.loadCities();
  }

  loadCities() {
    const citiesList = [
      {name: 'casablanca', image: 'assets/cities/casablanca.jpg'},
      {name: 'paris', image: 'assets/cities/paris.jpg'},
      {name: 'london', image: 'assets/cities/london.jpg'},
      {name: 'vienna', image: 'assets/cities/vienna.jpg'},
      {name: 'barcelona', image: 'assets/cities/barcelona.jpg'},
      {name: 'prague', image: 'assets/cities/prague.jpg'},
      {name: 'amsterdam', image: 'assets/cities/amsterdam.jpg'},
      {name: 'rome', image: 'assets/cities/rome.jpg'},
      {name: 'lisbonne', image: 'assets/cities/lisbonne.jpg'},
    ];

    this.cities = citiesList;
  }

}

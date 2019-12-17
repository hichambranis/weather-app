import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  weather: any;
  city: string;
  cityImage: string;

  constructor(private weatherService: WeatherService, private route: ActivatedRoute) { }

  ngOnInit() {
     this.route.params.subscribe(params => {
      this.city = params['city'];
      this.cityImage = `assets/cities/${this.city}.jpg`;
      this.getWeatherByCity(this.city);
      });
  }

  getWeatherByCity(city: string) {
    this.weatherService.getCityWeatherByName(city).subscribe(data => {
      this.weather = data;
    })
  }

}

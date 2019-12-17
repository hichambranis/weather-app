import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getCityWeatherByName(city: string) {
    return this.http.get(`${environment.apiUrl}/current?access_key=750199bae186c5ada20ff3789ce5a9a6&query=${city}`);
  }
}

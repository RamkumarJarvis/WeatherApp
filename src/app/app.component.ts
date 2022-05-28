import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  cityName: string = 'London';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe((response: any) => {
      this.weatherData = response;
      console.log(response);
    });
  }
}

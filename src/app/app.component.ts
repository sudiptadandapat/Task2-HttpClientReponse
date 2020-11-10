import { Component } from '@angular/core';
import { GetWeatherService } from './get-weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  location="";
  weatherData: any;
  getData=false;

  constructor(private getWeatherService : GetWeatherService){}
  

  getWeather(){
    console.log(this.location);
    this.getWeatherService
      .getWeather(this.location)
      .subscribe(data => {
        this.weatherData = data;
        this.getData=true;
        console.log(data);
      });
  }
  
}

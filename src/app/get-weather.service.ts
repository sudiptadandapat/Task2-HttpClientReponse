import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherService {

  constructor(private http:HttpClient) { }

  getWeather(location:string){
    return this.http.get(
        'http://api.weatherstack.com/current?access_key=40d30e5bca80473c577249208141d78e&query=' + location
    );
}

}

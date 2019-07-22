import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  city;
  appid = '79f6b541a12f5a8ac4dd4253b40dcdaa';

  constructor(private http: HttpClient){}

     
    getWeatherData(city) {
      
      return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&APPID=' + this.appid );
    }

    // searchDta()
    // {
    //   return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + this.city + '&unit=metric&APPID=' + this.appid );
    // }
  }
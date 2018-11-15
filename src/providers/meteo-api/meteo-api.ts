import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform } from "ionic-angular";
import { Observable } from "rxjs/Rx";
import { CityInfo } from "../../../interface/CityInfo";

/*
  Generated class for the MeteoApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MeteoApiProvider {
  private baseUrl: string = "../../assets/api/movies.json";

  constructor(private readonly http: HttpClient,
    private readonly platform: Platform) {
    console.log('Hello MeteoApiProvider Provider');
  }

  getAllDays(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

}
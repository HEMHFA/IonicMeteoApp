import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MeteoApiProvider } from '../../providers/meteo-api/meteo-api';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  formulaire = {jour:""};
  Image = "";
  Date = "";
  Min = "";
  Max = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public MeteoApiProvider : MeteoApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  getJour(jour){
    this.MeteoApiProvider.getAllDays().subscribe(data =>{
      for(let i = 0; i<5; i++){
        if (data["fcst_day_"+i]["day_long"] == jour) {
          this.Image = data["fcst_day_"+i]["icon_big"];
          this.Date = data["fcst_day_"+i]["date"];
          this.Min = data["fcst_day_"+i]["tmin"];
          this.Max = data["fcst_day_"+i]["tmax"];
        }
      }
    })
  }

  logFormulaire(){
    this.getJour(this.formulaire.jour);
  }

  
}

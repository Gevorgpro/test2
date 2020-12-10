import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import * as Rx from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocationService {
currentPosition: any = {};

  constructor(
  	private geolocation: Geolocation
  	) { }

  getCurrentPosition(){
        return new Promise((resolve) => {
		this.geolocation.getCurrentPosition().then((resp:any) => {
			let cords = {latitude: resp.coords.latitude, longitude: resp.coords.longitude}
		 this.currentPosition = cords
		 resolve(cords)
		  // console.log('getting location', cords);
		}).catch((error) => {
		  console.log('Error getting location', error);
		});
		});
  }
}

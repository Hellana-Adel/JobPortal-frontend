import { TranslateService } from '@ngx-translate/core';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    protected _http: HttpClient,

  ) { }

  convert(translate: TranslateService) {
    if (localStorage.getItem("lang") == "ar") {
      translate.use('ar');
      localStorage.setItem("lang", "ar")
      translate.setDefaultLang('ar');
    }
    else if (localStorage.getItem("lang") == "en") {
      translate.use('en');
      localStorage.setItem("lang", "en")
      translate.setDefaultLang('en');
    }
    else if (localStorage.getItem("lang") == "fr") {
      translate.use('fr');
      localStorage.setItem("lang", "fr")
      translate.setDefaultLang('fr');
    }
    else if (localStorage.getItem("lang") == "gr") {
      translate.use('gr');
      localStorage.setItem("lang", "gr")
      translate.setDefaultLang('gr');
    }
    else if (localStorage.getItem("lang") == "sp") {
      translate.use('sp');
      localStorage.setItem("lang", "sp")
      translate.setDefaultLang('sp');
    }
    let link = document.createElement("link")
    if (localStorage.getItem("lang") == "ar") {

      document.head.removeChild(document.head.lastElementChild!)
      document.body.style.direction = "rtl";

      link.setAttribute("href", "./assets/scss/style.rtl.css")
      link.setAttribute("rel", "stylesheet")




    } else {

      document.head.removeChild(document.head.lastElementChild!)
      document.body.style.direction = "ltr"
      link.setAttribute("href", "./assets/scss/style.scss")

    }
    document.head.appendChild(link)
  }

  // Encrypt(keys: any, value: any) {
  //   // const cryptoInfo = CryptoJS.AES.encrypt(value, keys).toString();

  //   // return cryptoInfo.toString();
  // }

  //The get method is use for decrypt the value.
  // Decrypt(keys:any, value:any){
  //  let decrypted=CryptoJS.AES.decrypt(value, keys).toString(CryptoJS.enc.Utf8);
  //   return decrypted;
  // }
  incrementTime(minutesToAdd: any, Value: any): any {


    if (Value) {
      let [hours, minutes] = Value.split(':').map(Number);

      // Calculate new minutes and hours
      minutes += minutesToAdd;

      // Handle overflow of minutes
      if (minutes >= 60) {
        minutes -= 60;
        hours += 1;
      }

      // Handle overflow of hours (24-hour format)
      if (hours >= 24) {
        hours -= 24;
      }

      // Format hours and minutes
      Value = this.formatTime(hours, minutes);
      return Value
    }
  }

  decrementTime(minutesToSubtract: any, Value: any) {


    if (Value) {
      let [hours, minutes] = Value.split(':').map(Number);

      // Calculate new minutes and hours
      minutes -= minutesToSubtract;

      // Handle underflow of minutes
      if (minutes < 0) {
        minutes += 60;
        hours -= 1;
      }

      // Handle underflow of hours
      if (hours < 0) {
        hours += 24;
      }

      // Format hours and minutes
      Value = this.formatTime(hours, minutes);
      return Value;
    }
  }

  formatTime(hours: any, minutes: any) {
    return String(hours).padStart(2, '0') + ':' + String(minutes).padStart(2, '0');
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocaleStorageService {

  constructor() { }

  public getData(key: string) {
    const data = localStorage.getItem(key);
    if(data){
      return JSON.parse(data);
    }
    return localStorage.getItem(key)
  }

  public saveData(key: string, value: any) {
    const data = JSON.stringify(value)
    localStorage.setItem(key, data);
  }
}

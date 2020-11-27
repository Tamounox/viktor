import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Theme  {
  name: string,
  primary: string,
  secondary: string
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themes;
  constructor(private storage: Storage) {}

  getData() {
    this.storage.get('theme').then((val) => {
      if(val.length < 1)  {
        val.forEach(e => {
          this.themes.push({name: e.name, primary: e.primary, secondary: e.secondary});
        });
      }
      console.log('Your age is', val);
    });
  }
  
  addTheme(name, primary, secondary) {
    let data = [name, primary, secondary];
    this.storage.set('themes', data);
  }
}
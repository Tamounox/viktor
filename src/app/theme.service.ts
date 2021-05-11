import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Theme  {
  name: string;
  primary: string;
  secondary: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themes;
  constructor(private storage: Storage) {}

  getData = () => new Promise((theme) =>  {
    this.storage.get('theme').then((val) => {
      console.log('cc');
      if (val !== null)  {
        val.forEach(e => {
          this.themes.push({name: e.name, primary: e.primary, secondary: e.secondary});
        });
      }
      else{
        this.themes = [];
      }
    });
  })
  addTheme(name, primary, secondary) {
    let data = [name, primary, secondary];
    this.storage.set('themes', data);
  }
}

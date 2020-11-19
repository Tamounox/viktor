import { Injectable } from '@angular/core';
import { PictureWord } from 'src/app/models/picture-word';
import jsonData from './zoom.data.json';

@Injectable({
  providedIn: 'root'
})
export class ZoomService {
  public datas: PictureWord[] = [];
  constructor() { }

  getDataZoom(): PictureWord[] {
    jsonData.forEach(elem => {
      this.datas.push(new PictureWord(elem.libelle, elem.img));
    });

    return this.datas;
  }
}

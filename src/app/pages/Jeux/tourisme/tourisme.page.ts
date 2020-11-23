import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-tourisme',
  templateUrl: './tourisme.page.html',
  styleUrls: ['./tourisme.page.scss'],
})
export class TourismePage implements OnInit {

  constructor() {}

  allwords = [{
      libelle: 'Paris',
      img: './../../../assets/paris.jpg',
    },
    {
      libelle: 'Marseille',
      img: './../../../assets/marseille.jpg',
    },
    {
      libelle: 'Madrid',
      img: './../../../assets/madrid.jpg',
    },
  ];
  etape1 = false;
  etape2 = false;
  tensec = false;
  end = false;
  words = [];
  nbrChoix = 3;
  igor;
  def;
  lib;
  seconds = 2;
  g = false;
  ngOnInit() {
    for (let index = 0; index < this.nbrChoix; index++) {
      let indexWord = Math.floor(Math.random() * Math.floor(this.allwords.length));
      this.words.push(this.allwords[indexWord]);
      this.allwords.splice(indexWord, 1);
      if (this.words.length === 3) {
        this.etape1 = true;
      }
    }
  }
  choose(word) {
    this.igor = word;
    this.lib = this.igor.libelle;
    this.def = this.igor.img;
    this.etape2 = true;
    this.etape1 = false;
  }
  go() {
    this.timer();
    this.g = true;
    this.tensec = true;
  }
  timer() {
    if (this.seconds > 0) {
      setTimeout(() => this.nul(), 1000);
    }
  }
  nul() {
    this.seconds = this.seconds - 1;
    this.timer();
  }
  endDef() {
    this.end = true;
    this.etape2 = false;
  }
}
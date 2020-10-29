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
  seconds = 2;
  g = false;
  ngOnInit() {
    for (let index = 0; index < this.nbrChoix; index++) {
      let indexWord = Math.floor(Math.random() * Math.floor(this.allwords.length));
      this.words.push(this.allwords[indexWord]);
      if (this.words.length === 3) {
        this.etape1 = true;
      }
    }
  }
  choose(word) {
    this.igor = word;
    this.def = this.igor.img;
    console.log('word', this.igor);
    this.etape2 = true;
    this.etape1 = false;
  }
  go() {
    this.timer();
    this.g = true;
    // setInterval(() => this.tenSec(), 20000);
    this.tensec = true;
    console.log('go');
  }
  // tenSec()  {
  //   this.tensec = true;
  //   console.log('this.tensec', this.tensec);
  //   setInterval(() => this.endDef(), 10000);
  //   setInterval(() => this.endTenSec(), 4000);
  // }
  // endTenSec() {
  //   this.tensec = false;
  //   console.log('this.tensec2', this.tensec);
  // }
  timer() {
    if (this.seconds > 0) {
      console.log('second', this.seconds);
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
    console.log('this.tensec3', this.tensec);
  }
}
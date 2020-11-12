import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.page.html',
  styleUrls: ['./zoom.page.scss'],
})
export class ZoomPage implements OnInit {

  public etape1 = false;
  public etape2 = false;
  public tensec = false;
  public end = false;
  public choosenWords: PictureWord[] = [];
  public nbrChoix = 3;
  public gameStarted = false;
  public seconds = 30;
  public igor: PictureWord; //Mot choisi par le joueur
  public def: string;

  constructor() { }

  wordsDictionary: PictureWord[] = [{
    libelle: 'Omar Sy',
    img: './../../../assets/celebrites/omar-sy.jpg',
  },
  {
    libelle: 'Johnny Hallyday',
    img: './../../../assets/celebrites/johnny-hallyday.jpg',
  },
  {
    libelle: 'Zinédine Zidane',
    img: './../../../assets/celebrites/zinedine-zidane.jpg',
  },
  ];

  ngOnInit() {
    console.log('init');
    for (let index = 0; index < this.nbrChoix; index++) {
      let indexWord = Math.floor(Math.random() * Math.floor(this.wordsDictionary.length));
      this.choosenWords.push(this.wordsDictionary[indexWord]);
      this.wordsDictionary.splice(indexWord, 1);

      if (this.choosenWords.length === this.nbrChoix) {
        console.log('init etape 1');

        this.etape1 = true;
      }
    }
  }

  choose(word: PictureWord) {
    this.igor = word;
    this.def = this.igor.img;
    this.etape2 = true;
    this.etape1 = false;
  }

  go() {
    this.timer();
    this.gameStarted = true;
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
    console.log('end');
    this.end = true;
    this.etape2 = false;
  }
}

export class PictureWord {
  public libelle: string;
  public img: string;
}
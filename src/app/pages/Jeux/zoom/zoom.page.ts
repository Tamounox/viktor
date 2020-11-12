import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.page.html',
  styleUrls: ['./zoom.page.scss'],
})
export class ZoomPage implements OnInit {

  public etape1 = false;
  public etape2 = false;
  public end = false;
  public choosenWords: PictureWord[] = [];
  public nbrChoix = 3;
  public seconds = 10;
  public gameStarted = false;
  public igor: PictureWord; //Mot choisi par le joueur
  public choosenImg: string;

  public zoomRate: number = 5;

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

  ngOnInit() { //Initialisation de la liste de 3 mots dans lequel le joueur doit choisir
    for (let index = 0; index < this.nbrChoix; index++) {
      let indexWord = Math.floor(Math.random() * Math.floor(this.wordsDictionary.length));
      this.choosenWords.push(this.wordsDictionary[indexWord]);
      this.wordsDictionary.splice(indexWord, 1);

      if (this.choosenWords.length === this.nbrChoix) {
        this.etape1 = true;
      }
    }
  }

  choose(word: PictureWord) {
    this.igor = word;
    this.choosenImg = this.igor.img;
    this.etape2 = true;
    this.etape1 = false;
  }

  go() {
    this.timer();
    this.gameStarted = true;
  }

  timer() {
    if (this.seconds > 0) {
      setTimeout(() => this.nul(), 1000);
    } else {
      this.end = true;
    }
  }

  nul() { //Décrementation du timer et recalcule du zoom de l'image
    this.seconds = this.seconds - 1;
    this.zoomRate = this.zoomRate - 0.5;
    this.timer();
  }
}

export class PictureWord {
  public libelle: string;
  public img: string;
}
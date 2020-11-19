import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ZoomService } from 'src/app/services/zoom/zoom.service';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.page.html',
  styleUrls: ['./zoom.page.scss'],
})
export class ZoomPage implements OnInit {

  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  @ViewChild('img', { static: true }) img: ElementRef;

  public etape1 = false;
  public etape2 = false;
  public end = false;
  public choosenWords: PictureWord[] = [];
  public nbrChoix = 3;
  public seconds = 10;
  public gameStarted = false;
  public igor: PictureWord; //Mot choisi par le joueur
  public choosenImg: string;
  private ctx: CanvasRenderingContext2D;

  public zoomRate: number = 5;
  public wordsDictionary: PictureWord[];

  constructor(private _zoomService: ZoomService) { }

  //  = [{
  //   libelle: 'Omar Sy',
  //   img: './../../../assets/celebrites/omar-sy.jpg',
  // },
  // {
  //   libelle: 'Johnny Hallyday',
  //   img: './../../../assets/celebrites/johnny-hallyday.jpg',
  // },
  // {
  //   libelle: 'Zinédine Zidane',
  //   img: './../../../assets/celebrites/zinedine-zidane.jpg',
  // },
  // ];

  ngOnInit() { //Initialisation de la liste de 3 mots dans lequel le joueur doit choisir
    this.wordsDictionary = this._zoomService.getDataZoom();

    for (let index = 0; index < this.nbrChoix; index++) {
      let indexWord = Math.floor(Math.random() * Math.floor(this.wordsDictionary.length));
      this.choosenWords.push(this.wordsDictionary[indexWord]);
      this.wordsDictionary.splice(indexWord, 1);

      if (this.choosenWords.length === this.nbrChoix) {
        this.etape1 = true;
      }

      this.drawImage();
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

  drawImage() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    const i = new Image();
    i.src = this.choosenImg;
    i.onload = () => {
      this.ctx.drawImage(i, 200, 200);
    };
  }
}


export class PictureWord {
  constructor(libelle, img) {
    this.libelle = libelle;
    this.img = img;
  }
  
  public libelle: string;
  public img: string;
}
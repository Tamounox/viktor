import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PictureWord } from 'src/app/models/picture-word';
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
  public scale = 10;
  public gameStarted = false;
  public igor: PictureWord; //Mot choisi par le joueur
  public choosenImg: string;
  private ctx: CanvasRenderingContext2D;

  public zoomRate: number = 5;
  public wordsDictionary: PictureWord[];

  constructor(private _zoomService: ZoomService) { }

  ngOnInit() { //Initialisation de la liste de 3 mots dans lequel le joueur doit choisir
    this.wordsDictionary = this._zoomService.getDataZoom();

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

    this.drawImage();
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
    this.resizeCanvas();
    this.timer();
  }

  drawImage() {
    this.ctx = this.canvas.nativeElement.getContext('2d');

    setTimeout(() => {
      this.ctx.scale(this.scale, this.scale);
      this.ctx.drawImage(this.img.nativeElement, 0, 0, 300, 150);
    }, 500);
  }

  resizeCanvas() {
    this.scale = this.scale - 1;
    this.ctx.scale(this.scale, this.scale);
  }
}
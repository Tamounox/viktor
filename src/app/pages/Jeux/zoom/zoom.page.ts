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
  public seconds = 20;
  public gameStarted = false;
  public igor: PictureWord; //Mot choisi par le joueur
  public choosenImg: string;
  private ctx: CanvasRenderingContext2D;

  public wordsDictionary: PictureWord[];
  public scale = 50.0;
  public intervaler = (this.seconds * 1000) / this.scale;
  public scaleMultiplier = 0.93;
  public translatePos;

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

    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.translatePos = {
      x: this.canvas.nativeElement.width / 2,
      y: this.canvas.nativeElement.height / 2
    };
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
    this.dezoom();
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
    this.timer();
  }

  drawImage() {
    setTimeout(() => {
      this.draw(this.scale, this.translatePos);
    }, 500);
  }

  dezoom() {
    if (this.seconds > 0) {
      this.scale *= this.scaleMultiplier;
      // while (this.seconds > 0) {
        setTimeout(() => this.igo(), this.intervaler);
      }
    // }
    else {
      this.scale = 1;
    }
  }

  igo() {
    console.log('igo');
    this.draw(this.scale, this.translatePos);
    this.dezoom();
  }
  draw(scale, translatePos) {
    this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    this.ctx.save();
    this.ctx.translate(translatePos.x, translatePos.y);
    this.ctx.scale(scale, scale);
    this.ctx.drawImage(this.img.nativeElement, -translatePos.x, -translatePos.y, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    this.ctx.restore();
  }
}

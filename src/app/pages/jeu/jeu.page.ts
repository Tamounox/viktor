import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.page.html',
  styleUrls: ['./jeu.page.scss'],
})
export class JeuPage  {
  jeux = ['zoom'];
  // jeux = ['definition', 'tourisme', 'zoologie','zoom'];

  //, 'microscope', 'tour bonus'
  tour  = 0;
  selectedGame = '';

  constructor() { }

  ionViewDidEnter(){
    let indexJeu = getRandomInt(this.jeux.length);
    console.log(indexJeu);
    this.selectedGame = this.jeux[indexJeu];
    console.log(this.selectedGame);
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
  }



}

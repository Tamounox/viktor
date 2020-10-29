import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.page.html',
  styleUrls: ['./jeu.page.scss'],
})
export class JeuPage implements OnInit {
  jeux = ['definition', 'tourisme', 'zoologie'];
  //, 'microscope', 'tour bonus'
  tour  = 0;
  selectedGame = '';

  constructor() { }

  ngOnInit() {
    let indexJeu = getRandomInt(this.jeux.length);
    console.log(indexJeu);
    this.selectedGame = this.jeux[indexJeu];
    console.log(this.selectedGame);
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
  }


}

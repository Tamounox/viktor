import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { MosaiqueService } from './mosaique.service';

@Component({
  selector: 'app-mosaique',
  templateUrl: './mosaique.page.html',
  styleUrls: ['./mosaique.page.scss'],
})
export class MosaiquePage implements OnInit {

  constructor(private mosaiqueService: MosaiqueService, private platform: Platform) { }

  // Definitions de nos variables global (en cour de conception)
  table = []
  height = 0;
  width = 0;
  heightPicture;
  widthPicture;

  // Creation des variable d'une personne
  person
  persons = []
  imgPerson = 'https://www.zooplus.fr/magazine/wp-content/uploads/2019/11/chaton-errant-768x512.jpeg';
  namePerson
 
  // gestion du temps
  seconds = 20;
  g = false;
  tensec = false;
  end = false;

  // nombre de proposition
  nbrChoix = 3;

  numbX = 20;
  numbY = 15;
  igo =  (this.seconds * 1000) / (this.numbX * this.numbY);

  // Permet la gestion de l'affichage aux diférentes etapes du jeu
  etape1 = true;
  etape2 = false;

  // Récupérations des personages
  allpersons = [];

  ngOnInit() {

    this.platform.ready().then(() => {
      this.heightPicture = this.platform.height();
      this.widthPicture = this.platform.width();
    });

    this.allpersons = this.mosaiqueService.getAllpersons();
    for (let index = 0; index < this.nbrChoix; index++) {
      let indexWord = Math.floor(Math.random() * Math.floor(this.allpersons.length));
      this.persons.push(this.allpersons[indexWord]);
      this.allpersons.splice(indexWord, 1);
      if (this.persons.length === 3) {
        this.etape1 = true;
      }
    }
    this.generateTable()
  }

  // Creation de notre table
  generateTable(){
    this.width =  this.platform.width() / this.numbX; // largeur
    this.height =  this.platform.height() / this.numbY; // hauteur
    // let arr1
    // let arr2
    const x = new Array(this.numbX);
    for (let i = 0; i < x.length; i++) {
      x[i] = new Array(this.numbY).fill(true);
    }
    this.table = x;
  }

  // Suppression d'un bloc de maniere random
  updateTable(){
    let x;
    let y;
    do {
      x = Math.floor(Math.random() * Math.floor(this.table.length));
      y = Math.floor(Math.random() * Math.floor(this.table[0].length));
    } while (this.table[x][y] === false);
    this.table[x][y] = false;
  }

  mosaiqueGO(){
    if (this.seconds > 0){
      setTimeout(() => this.mosaiqueSet(), this.igo);
    } else {
      return false;
    }
  }

  mosaiqueSet(){
    this.updateTable();
    this.mosaiqueGO();
  }

  // Etape 1 choix de la person a faire deviner
  choose(person) {
    this.person = person;
    this.imgPerson = this.person.img;
    this.namePerson = this.person.libelle;
    this.etape1 = false;
    this.etape2 = true;
  }

  // Lancement du chrono
  go() {
    this.mosaiqueGO();
    this.timer();
    this.g = true;
    this.tensec = true;
  }

  cleanMosaique() {
    
  }

  // compte du timer
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
    this.cleanMosaique();
    this.end = true;
    this.etape2 = false;
  }

}

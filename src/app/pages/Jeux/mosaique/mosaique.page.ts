import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mosaique',
  templateUrl: './mosaique.page.html',
  styleUrls: ['./mosaique.page.scss'],
})
export class MosaiquePage implements OnInit {

  constructor() { }

  // Definitions de nos variables global (en cour de conception)
  cols = [true, true, true, true]
  rows = [true, true, true, true]
  table = []

  // Creation des variable d'une personne
  person
  persons = []
  imgPerson
  namePerson
 
  // gestion du temps
  seconds = 2;
  g = false;
  tensec = false;
  end = false;

  // nombre de proposition
  nbrChoix = 3;


  // Permet la gestion de l'affichage aux diférentes etapes du jeu
  etape1 = true 
  etape2 = false

  // simili JSON
  allpersons = [{
    libelle: 'Chat',
    img: 'https://www.zooplus.fr/magazine/wp-content/uploads/2019/11/chaton-errant-768x512.jpeg'
  },
  {
    libelle: 'Chien',
    img: 'https://static.actu.fr/uploads/2019/10/chien-960x640.jpg'
  },
  {
    libelle: 'Lapin',
    img: 'https://www.tomandco.fr/media/contentmanager/content/cache/440x800/advices/Lapin-1400pxls_4.jpg'
  }
];

  ngOnInit() {
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


  // En court de conception
  generateTable(){
    var x = new Array(10);
    for (var i = 0; i < x.length; i++) {
      x[i] = new Array(3).fill(true);
    }
    this.table = x
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
    this.timer();
    this.g = true;
    this.tensec = true;
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
    this.end = true;
    this.etape2 = false;
  }

}

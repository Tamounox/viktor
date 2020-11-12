import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mosaique',
  templateUrl: './mosaique.page.html',
  styleUrls: ['./mosaique.page.scss'],
})
export class MosaiquePage implements OnInit {

  constructor() { }
  cols = [true, true, true, true]
  rows = [true, true, true, true]
  person
  persons = []
  imgPerson
  namePerson

  nbrChoix = 3;

  etape1 = true 
  etape2 = false

  allpersons = [{
    libelle: 'Putin',
    img: 'https://storage.googleapis.com/afs-prod/media/01cf2d5940a443e0bf410e98032d2d09/800.jpeg'
  },
  {
    libelle: 'Balkany',
    img: 'https://cdn-media.rtl.fr/online/image/2019/0918/7798350993_patrick-balkany-a-la-mairie-de-levallois-perret.jpg'
  },
  {
    libelle: 'Trump',
    img: 'https://img.lemde.fr/2020/09/17/0/0/5009/3339/688/0/60/0/9325405_f140e5a26e1e472b94e34b1dfa653fb8-18dd5c75b85e4e5dbcde4a47e273e3f6-0.jpg'
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
  }

  choose(person) {
    this.person = person;
    this.imgPerson = this.person.img;
    this.namePerson = this.person.libelle;
    this.etape1 = false;
    this.etape2 = true;
  }

}

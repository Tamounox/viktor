import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-zoologie',
  templateUrl: './zoologie.page.html',
  styleUrls: ['./zoologie.page.scss'],
})
export class ZoologiePage implements OnInit {

  constructor() {}

  allwords = [{
      libelle: 'Souriss',
      def: ['nom féminin', 'Petit mammifère rongeur ( spécialement la souris commune, au pelage gris).', 'Boîtier connecté à un ordinateur, qui permet, par déplacement et pression sur un bouton (cliquer), de donner des instructions.', 'Muscle charnu à l\'extrémité du gigot.']
    },
    {
      libelle: 'Chèvre',
      def: ['nom féminin et nom masculin', 'Mammifère ruminant, à cornes arquées, à pelage fourni, apte à grimper et à sauter ; spécialement la femelle adulte (opposé à bouc ; à chevreau)', 'Appareil servant à soulever des fardeaux.']
    },
    {
      libelle: 'Magasin',
      def: ['nom masculin', 'Local où l\'on conserve, où l\'on expose des marchandises pour les vendre.', 'Partie creuse (d\'un appareil) destinée à être chargée']
    },
    {
      libelle: 'Vêtements',
      def: ['nom masculin', 'Habillement (comprenant le linge mais non les chaussures) ; spécialement vêtements de dessus (opposé à sous-vêtements).', 'Un vêtement une pièce de l\'habillement de dessus.']
    },
    {
      libelle: 'Péage',
      def: ['definition Péage 1', 'definition Péage 2', 'definition Péage 3']
    },
    {
      libelle: 'Tableau',
      def: ['definition Tableau 1', 'definition Tableau 2', 'definition Tableau 3']
    },
    {
      libelle: 'Carreau',
      def: ['definition Carreau 1', 'definition Carreau 2', 'definition Carreau 3']
    },
    {
      libelle: 'Peinture',
      def: ['definition Peinture 1', 'definition Peinture 2', 'definition Peinture 3']
    },
    {
      libelle: 'Iphone',
      def: ['definition Iphone 1', 'definition Iphone 2', 'definition Iphone 3']
    },
    {
      libelle: 'Appartement',
      def: ['definition Appartement 1', 'definition Appartement 2', 'definition Appartement 3']
    },
    {
      libelle: 'Câble',
      def: ['definition Câble 1', 'definition Câble 2', 'definition Câble 3']
    },
    {
      libelle: 'Cahier',
      def: ['definition Cahier 1', 'definition Cahier 2', 'definition Cahier 3']
    }
  ];
  etape1 = false;
  etape2 = false;
  tensec = false;
  end = false;
  words = [];
  nbrChoix = 3;
  igor;
  def;
  seconds = 2;
  g = false;
  lib;
  ngOnInit() {
    for (let index = 0; index < this.nbrChoix; index++) {
      let indexWord = Math.floor(Math.random() * Math.floor(this.allwords.length));
      this.words.push(this.allwords[indexWord]);
      this.allwords.splice(indexWord, 1);
      if (this.words.length === 3) {
        this.etape1 = true;
      }
    }
  }
  choose(word) {
    this.igor = word;
    this.def = this.igor.def;
    this.lib = this.igor.libelle;
    this.etape2 = true;
    this.etape1 = false;
  }
  go() {
    this.timer();
    this.g = true;
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
    this.end = true;
    this.etape2 = false;
  }

}

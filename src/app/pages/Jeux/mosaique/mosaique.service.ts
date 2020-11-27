import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MosaiqueService {

  constructor() { }

  getAllpersons(){
    return this.allpersons
  }

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
}

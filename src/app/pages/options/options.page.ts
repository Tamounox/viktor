import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {

  constructor() { }
  primary;
  secondary;
  ngOnInit() {
  }
  //try to mettre a jour la variable daans le scss
  saveAsConfig()  {
    console.log('d1', document.documentElement.style.getPropertyValue(':root'));
    document.documentElement.style.setProperty('--ion-background-color', this.primary );
    document.documentElement.style.setProperty('--ion-color', this.secondary);

  }

}

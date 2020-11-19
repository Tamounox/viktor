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
    document.documentElement.style.setProperty('background-color', this.primary );
    document.documentElement.style.setProperty('color', this.secondary);
    const el = document.querySelector('html');
    el.style.setProperty('--primary', this.primary );
    el.style.setProperty('--secondary', this.secondary );

  }

}

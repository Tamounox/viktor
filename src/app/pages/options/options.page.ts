import { ThemeService, Theme } from './../../theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {
  themes: Theme[] = [];
  constructor(private themeService: ThemeService) { }
  primary;
  secondary;
  name;
  theme;
  ngOnInit() {
    this.themeService.getDatabaseState().subscribe( ready =>  {
      if(ready) {
        this.themeService.getThemes().subscribe(themes => {
          console.log('themes changes ', themes)
          this.themes = themes;
        })
      }
    })
  }
  saveAsConfig()  {
    const el = document.querySelector('html');
    el.style.setProperty('--primary', this.primary );
    el.style.setProperty('--secondary', this.secondary );
    el.style.setProperty('--fill', this.secondary );
  }

  onClick(value) {
    if (value === 'igor' )  {
      this.primary = '#707d36';
      this.secondary = "#363d18";
    }
    if (value === 'viktor' )  {
      this.primary = '#f8eb3c';
      this.secondary = '#ee7406';
    }
  }

  addTheme()  {
    this.theme =  [
        this.name,
        this.primary,
        this.secondary
    ];
    this.themeService.addTheme(this.name, this.primary, this.secondary);
    this.themeService.getThemes().subscribe(themes => {
      console.log('themes changes ', themes)
      this.themes = themes;
    })
  }

  selectTheme(theme)  {
    this.primary = theme.primary;
    this.secondary = theme.secondary;

  }

}

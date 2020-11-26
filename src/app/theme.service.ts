import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

export interface Theme  {
  name: string,
  primary: string,
  secondary: string
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private storage: SQLiteObject;
  themeList = new BehaviorSubject([]);
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(
    private platform: Platform, 
    private sqlite: SQLite, 
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter,
  ) {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'viktor.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.storage = db;
          this.seedDatabase();
      });
      
    });
  }
  seedDatabase()  {
    this.httpClient.get('assets/dump.sql', { responseType: 'text' })
    .subscribe(sql => {
      this.sqlPorter.importJsonToDb(this.storage, sql)
        .then(_ =>  {
          this.isDbReady.next(true);
        })
        .catch( e => console.log(e));
    })
  }

  getData() {
    return this.storage.executeSql('SELECT * FROM themetable', []).then(data => {
      let themes: Theme[] = [];
      if(data.rows.length > 0)  {
        for(var i = 0; i < data.rows.length; i++) {
          themes.push({
            name: data.rows.item(i).name,
            primary: data.rows.item(i).primary,
            secondary: data.rows.item(i).secondary,
          })
        }
      }
      this.themeList.next(themes);

    })
  }
  
  addTheme(name, primary, secondary) {
    let data = [name, primary, secondary];
    console.log('data', data);
  return this.storage.executeSql('INSERT INTO themetable (name, primary, secondary) VALUES ('+ name +', '+ primary +', '+ secondary + ';')
  .then(res => {
    this.getData();
    console.log('themes', this.themeList);
  });
  }

  getDatabaseState()  {
    return this.isDbReady.asObservable();
  }

  getThemes(): Observable<Theme[]> {
    return this.themeList.asObservable()
  }
  //  // Render fake data
  //  getFakeData() {
  //   this.httpClient.get(
  //     'assets/dump.sql', 
  //     {responseType: 'text'}
  //   ).subscribe(data => {
  //     this.sqlPorter.importSqlToDb(this.storage, data)
  //       .then(_ => {
  //         this.getThemes();
  //         this.isDbReady.next(true);
  //       })
  //       .catch(error => console.error(error));
  //   });
  // }
}
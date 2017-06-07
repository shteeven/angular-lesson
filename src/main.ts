// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule, Component, OnInit } from '@angular/core';
//
// class Hero {
//   id: number;
//   name: string;
// }
//
// @NgModule({
//   imports: [ BrowserModule ],
//   declarations: [ AppComponent ],
//   exports: [ AppComponent ],
//   providers: [],
//   bootstrap: [ AppComponent ]
// })
// export class AppModule { }
//
// const HEROES: Hero[] = [
//   {id: 1, name: 'Bombasto'},
//   {id: 2, name: 'Tornado'},
//   {id: 3, name: 'Magneta'},
// ];
//
// @Component({
//   selector: 'app-root',
//   template: `
//       <h1>{{title}}</h1>
//       <pre>{{heroes | json}}</pre>
//     `,
//   styles: []
// })
// class AppComponent implements OnInit {
//   title = 'Tour of Heroes';
//   heroes: Hero[] = [];
//   ngOnInit() {
//     console.log('lols');
//     // getHeroes().then(heroes => this.heroes = heroes);
//   }
// }
//
// // function getHeroes(): Promise<Hero[]> {
// //   return Promise.resolve(HEROES); // TODO: get hero data from the server;
// // }
//
// platformBrowserDynamic().bootstrapModule(AppModule);

// import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, OnInit } from '@angular/core';

interface Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  template: `
      <h1>{{title}}</h1>
      <pre>{{heroes | json}}</pre>
    `,
  styles: []
})
class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[] = [];
  ngOnInit() {
    getHeroes().then(heroes => this.heroes = heroes);
  }
}

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  exports: [ AppComponent ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

const HEROES: Hero[] = [
  {id: 1, name: 'Bombasto'},
  {id: 2, name: 'Tornado'},
  {id: 3, name: 'Magneta'},
];

function getHeroes(): Promise<Hero[]> {
  return Promise.resolve(HEROES); // TODO: get hero data from the server;
}

// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
//
// import { AppComponent } from './app.component';
//
// @NgModule({
//   declarations: [AppComponent],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     HttpModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

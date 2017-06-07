import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';


@NgModule({
  imports: [
    BrowserModule,
    HeroesModule
  ],
  declarations: [ AppComponent ],
  exports: [ AppComponent ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

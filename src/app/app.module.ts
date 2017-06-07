import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeroesService } from './heroes/heroes.service';
import { AppComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  exports: [ AppComponent ],
  providers: [HeroesService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

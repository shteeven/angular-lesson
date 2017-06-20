import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HeroesModule} from './heroes/heroes.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { heroes } from './heroes/reducers';



@NgModule({
  imports: [
    BrowserModule,
    HeroesModule,
    BrowserAnimationsModule,
    StoreModule.provideStore({heroes})
  ],
  declarations: [AppComponent],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

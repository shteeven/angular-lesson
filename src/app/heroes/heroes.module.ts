import { NgModule } from '@angular/core';
import { HeroesService } from './heroes.service';
import { HeroesComponent } from './heroes.component';
import { SharedModule } from '../shared';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [HeroesComponent],
  exports: [HeroesComponent],
  providers: [HeroesService]
})
export class HeroesModule { }

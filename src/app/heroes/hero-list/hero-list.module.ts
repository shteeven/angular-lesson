import { NgModule } from '@angular/core';
import { HeroListComponent } from './hero-list.component';
import { SharedModule } from '../../shared';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [HeroListComponent],
  exports: [HeroListComponent],
  providers: []
})
export class HeroListModule { }

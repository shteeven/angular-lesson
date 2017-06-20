import { NgModule } from '@angular/core';
import { HeroComponent } from './hero-form.component';
import { SharedModule } from '../../shared';


@NgModule({
  imports: [SharedModule],
  declarations: [HeroComponent],
  exports: [HeroComponent],
  providers: []
})
export class HeroFormModule { }

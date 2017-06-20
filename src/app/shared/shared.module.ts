import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialDesignModule} from '../material-design';

@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule
  ],
  exports: [
    CommonModule,
    MaterialDesignModule
  ],
  declarations: []
})
export class SharedModule {
}

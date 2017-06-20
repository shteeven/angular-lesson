import {NgModule} from '@angular/core';
import {
  MdSelectModule, MdButtonModule, MdCardModule, MdInputModule, MdMenuModule,
  MdSidenavModule, MdIconModule, MdToolbarModule, MdListModule, MdCheckboxModule,
  MdProgressSpinnerModule, MdButtonToggleModule, MdAutocompleteModule
} from '@angular/material';

@NgModule({
  imports: [
    MdSelectModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdMenuModule,
    MdSidenavModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdToolbarModule,
    MdListModule,
    MdCheckboxModule,
    MdButtonToggleModule,
    MdAutocompleteModule
  ],
  exports: [
    MdSelectModule,
    MdCardModule,
    MdButtonModule,
    MdInputModule,
    MdMenuModule,
    MdSidenavModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdToolbarModule,
    MdListModule,
    MdCheckboxModule,
    MdButtonToggleModule,
    MdAutocompleteModule
  ],
  declarations: []
})
export class MaterialDesignModule {
}

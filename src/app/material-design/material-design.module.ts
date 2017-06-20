import {NgModule} from '@angular/core';
import {
  MdSelectModule, MdButtonModule, MdCardModule, MdInputModule, MdMenuModule,
  MdSidenavModule, MdIconModule, MdToolbarModule, MdListModule, MdCheckboxModule,
  MdProgressSpinnerModule, MdButtonToggleModule, MdAutocompleteModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MdListModule,
    MdIconModule,
    MdInputModule,
    MdButtonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MdListModule,
    MdIconModule,
    MdInputModule,
    MdButtonModule
  ],
  declarations: []
})
export class MaterialDesignModule {
}

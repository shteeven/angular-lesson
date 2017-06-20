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
    MdListModule,
    MdIconModule,
    MdInputModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    MdListModule,
    MdIconModule,
    MdInputModule,
    ReactiveFormsModule
  ],
  declarations: []
})
export class MaterialDesignModule {
}

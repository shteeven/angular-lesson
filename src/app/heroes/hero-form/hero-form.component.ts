import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Hero} from "../heroes.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-hero-form',
  template: `
  <form class="hero-form" [formGroup]="newHero" (ngSubmit)="submitForm(newHero.value)" novalidate>

    <table class="full-width" cellspacing="0">
      <tr>
        <td>
          <md-input-container class="full-width">
            <input mdInput placeholder="Name" formControlName="name">
          </md-input-container>
        </td>
        <td>
          <md-input-container class="full-width">
            <input mdInput placeholder="Hometown" formControlName="hometown">
          </md-input-container>
        </td>
      </tr>
    </table>
    <md-input-container class="full-width">
      <input mdInput placeholder="Super Power" formControlName="power">
    </md-input-container>
    <button md-raised-button type="submit">Add Hero</button>
  </form>

  `,
  styles: [`.hero-form {width: 500px;}`]
})
export class HeroComponent implements OnInit, OnChanges {
  @Input() hero: Hero;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  newHero = this.newHeroForm();
  constructor() {
  }

  newHeroForm({name='', hometown='', power=''} = {}): FormGroup {
    return new FormGroup({
      name: new FormControl(name),
      hometown: new FormControl(hometown),
      power: new FormControl(power)
    });
  }

  submitForm(newHero) {
    this.onSubmit.emit(newHero);
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.newHero = this.newHeroForm(this.hero);
  }
}

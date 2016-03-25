import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  outputs: ['onEndEdit'],
  template: `
    <div class="meal-form">
      <h4>Edit Meal Information</h4>
      <input [(ngModel)]="meal.name" class="input-md">
      <input [(ngModel)]="meal.description" class="input-md">
      <input [(ngModel)]="meal.calories" type="text" class="input-md">
      <button (click)=endEdit() class="btn-success btn-md add-button">Done Editing</button>
    </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
  public onEndEdit: EventEmitter<Meal>;
  constructor() {
    this.onEndEdit = new EventEmitter();
  }
  endEdit() {
    this.onEndEdit.emit(this.meal);
  }
}

import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="meal-form">
      <h4>Add a Meal:</h4>
      <form (submit)="addMeal(newName, newDescription, newCalories)">
        <input required placeholder="name" class="input-lg" #newName>
        <input required placeholder="description" class="input-lg" #newDescription>
        <input required placeholder="calories" type="string" class="input-lg" #newCalories>
        <button type="submit" class="btn-success btn-lg add-button">Add</button>
      </form>
    </div>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<string[]>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(newName: HTMLInputElement, newDescription: HTMLInputElement, newCalories: HTMLInputElement){
    var newMealInputs: string[] = [];
    newMealInputs.push(newName.value);
    newMealInputs.push(newDescription.value);
    newMealInputs.push(newCalories.value);

    this.onSubmitNewMeal.emit(newMealInputs);
    newName.value="";
    newDescription.value="";
    newCalories.value="";
  }
}

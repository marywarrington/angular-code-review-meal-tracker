import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
// import { EditMealDetailsComponent } from './edit-meal-details.component';

@Component({
  selector: 'meal-details',
  inputs: ['meal'],
  // outputs: ['onEditMeal'],
  // directives: [EditMealDetailsComponent],
  template: `
    <div class="meal-details">
      <h3>Descritpion: {{ meal.description }}</h3>
      <h3>Calories: {{ meal.calories }}</h3>
      <button (click)=editMeal()>Edit</button>

      <edit-meal-details *ngIf="mealToEdit" [meal]="meal" (onEndEdit)="mealToEdit = false"></edit-meal-details>
    </div>
  `
})
export class MealDetailsComponent {
  public mealToEdit: boolean = false;
  public meal: Meal;
  // public onEditMeal: EventEmitter<Meal>;
  // constructor() {
  //   this.onEditMeal = new EventEmitter();
  // }
  // editMeal() {
  //   this.mealToEdit = true;
  // }
}

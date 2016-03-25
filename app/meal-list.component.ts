import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { MealDetailsComponent } from './meal-details.component';
import { CaloriesPipe } from './calories.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  pipes: [CaloriesPipe],
  directives: [MealComponent, NewMealComponent, MealDetailsComponent],
  template: `
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all" selected="selected">Show All</option>
      <option value="healthy">Show Healthy Meals</option>
      <option value="unhealthy">Show Unhealthy Meals</option>
    </select>
    <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
    <meal-display *ngFor="#currentMeal of mealList | calories:caloriesFilter"
      [meal]="currentMeal"
    ></meal-display>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public selectedMeal: Meal;
  public caloriesFilter: string = "All Meals"
  createMeal(userInputArray: string[]): void {
    this.mealList.push(
      new Meal(userInputArray[0], userInputArray[1], userInputArray[2])
    );
  }
  onChange(filterOption) {
  this.caloriesFilter = filterOption;
  }
}

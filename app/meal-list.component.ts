import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { MealDetailsComponent } from './meal-details.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealComponent, NewMealComponent, MealDetailsComponent],
  template: `
    <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
    <meal-display *ngFor="#currentMeal of mealList"
      [meal]="currentMeal"
    ></meal-display>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public selectedMeal: Meal;
  createMeal(userInputArray: string[]): void {
    this.mealList.push(
      new Meal(userInputArray[0], userInputArray[1], userInputArray[2])
    );
  }
}

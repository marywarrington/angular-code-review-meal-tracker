import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Meal Tracker!</h1>
      <meal-list [mealList]="meals"></meal-list>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [
      new Meal("Hamburger", "So damn tasty", 900),
      new Meal("Oatmeal", "Pretty healthy, but filling", 300),
      new Meal("fruit bowl", "great!", 150)
    ]
  }
}

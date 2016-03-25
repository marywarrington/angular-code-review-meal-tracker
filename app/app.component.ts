import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [],
  template: `
    <div class="container">
      <h1>Meal Tracker!</h1>
      <ul><li>Here's a test meal!</li></ul>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [

    ]
  }
}

import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealDetailsComponent} from './meal-details.component';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  directives: [MealDetailsComponent],
  template: `
    <h3 (click)="mealClicked()">{{ meal.name }}</h3>
    <meal-details *ngIf="detailShow" [meal]="meal"></meal-details>
  `
})

export class MealComponent {
  public meal: Meal;
  public detailShow: boolean = false;
  mealClicked(): void {
    this.detailShow = !this.detailShow;
  }
}

import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calories",
  pure: false
})

export class CaloriesPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredCalories = args[0];
    console.log(desiredCalories);
    if (desiredCalories === "unhealthy") {
      return input.filter(function(meal) {
        // if (parseInt(meal.calories) > 300) {
        //   return true;
        // }
        return parseInt(meal.calories) > 300;
      });
    } else if (desiredCalories === "healthy") {
      return input.filter((meal) => {
        // if (parseInt(meal.calories) <= 300) {
        //   return true;
        // }
        return parseInt(meal.calories) <= 300;
      });
    } else {
      return input;
    }
  }
}

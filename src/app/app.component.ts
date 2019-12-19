import { Component, Output, EventEmitter } from '@angular/core';
import { IngredientsData } from './interfaces/ingredients.interface';
import { ingredientsData } from './mock-ingredients/mock-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week5Test';
  ingredients: IngredientsData[] = []

  onChanged(ingredient: IngredientsData) {
    this.ingredients.push(ingredient);
    console.log(this.ingredients);
  }
}

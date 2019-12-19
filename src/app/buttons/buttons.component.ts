import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IngredientsData } from '../interfaces/ingredients.interface';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  @Output() change = new EventEmitter();

  onMeat() {
    const ingredientBurger: IngredientsData = {
      name: 'meat',
      amount: 2,
      price: 2.99
    };
    this.change.emit(ingredientBurger); 
  }

  onSalad() {
    const ingredientBurger: IngredientsData = {
      name: 'salad',
      amount: 2,
      price: 3.99
    };
    this.change.emit(ingredientBurger); 
  }

  onCheese(){
      const ingredientBurger: IngredientsData = {
        name: 'cheese',
        amount: 2,
        price: 4.99
      };
      this.change.emit(ingredientBurger); 
  }

  onBacon(){
    const ingredientBurger: IngredientsData = {
      name: 'bacon',
      amount: 2,
      price: 5.99
    };
    this.change.emit(ingredientBurger); 
}

  constructor() { }

  ngOnInit() {}
}

import { Component, OnInit, Input } from '@angular/core';
import { IngredientsData } from '../interfaces/ingredients.interface';

@Component({
  selector: 'app-bread',
  templateUrl: './bread.component.html',
  styleUrls: ['./bread.component.css']
})
export class BreadComponent implements OnInit {

  @Input()ingredients: IngredientsData;

  burger() {
  alert(this.ingredients);
  }
  constructor() { }

  ngOnInit() {
  }

}

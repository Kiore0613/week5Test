import { Component, OnInit, Input } from '@angular/core';
import { IngredientsData } from '../interfaces/ingredients.interface';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  @Input() messageReceived: string;

  burger() {
    console.log(this.messageReceived);
  }
  constructor() { }

  ngOnInit() {
  }

}

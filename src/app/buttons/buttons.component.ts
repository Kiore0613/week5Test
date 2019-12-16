import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  @Output() change = new EventEmitter();
  onClicked(name: string) {
    this.change.emit(name);
  }

  constructor() { }

  ngOnInit() {
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-code-interaction',
  templateUrl: './code-interaction.component.html',
  styleUrls: ['./code-interaction.component.css'],
})
export class CodeInteractionComponent implements OnInit {
  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  fireEvent() {
    this.childEvent.emit(
      'This messages comes from child component at button click @Output using $event '
    );
  }
}

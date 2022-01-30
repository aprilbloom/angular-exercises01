import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-pipes',
  templateUrl: './ex-pipes.component.html',
  styleUrls: ['./ex-pipes.component.css'],
})
export class ExPipesComponent implements OnInit {
  public name = 'code evolution';
  public date = new Date();
  public person = {
    "firstname" : "John",
    "lastname" : "Doe"
  }

  constructor() {}

  ngOnInit() {}
}

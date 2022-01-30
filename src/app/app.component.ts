import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  public myName =
    'This message display "Leah Leonor" from parent to child component using @Input';
  public message = '';
  myProp = 'dddd';
  yyy = 'www.youtube.com';

  


  showMe() {
    alert('Show this text');
  }

  onClick(event: MouseEvent) {
    console.dir(event);
  }
}

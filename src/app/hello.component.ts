import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1 
    [style.font-style] = "italic"
    [class]="bg"
    [class.underline] = "isActive" 
    [style]="transform"
  >
  Hello {{name}}!
  </h1>`,
  styles: [
    `
    :host { 
      border: 1px solid red; 
      display: block;
    }
    :host('.xxx') {
      border: 4px solid yellow;
    }
    .cs {
      font-style: italic;
    }
    .highlights {
      background: yellow;
    }
    .underline {
      text-decoration: underline;
    }

    h1 { 
      font-family: Lato; color: red; 
      border: 1px solid green; 
      padding: 10px; margin: 20px; 
    }`,
  ],
})
export class HelloComponent {
  @Input() name: string;
  isActive = true;
  bg = 'highlights';
  transform = 'text-transform: uppercase';

  italic = 'italic';
}

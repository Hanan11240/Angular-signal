import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  template: `
    <button class=" rounded-xl text-black w-full  
    px-5 py-2 shadow-md hover:opacity-90" (click)="btnClicked.emit()">{{label()}}</button>
  
  `,
  styles: ``
})
export class ButtonComponent {
label = input('');
btnClicked = output();
}

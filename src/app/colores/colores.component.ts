import { Component } from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css'],
})
export class ColoresComponent {
  constructor() {}

  public randomColor(): string {
    const symbols = '0123456789ABCDEF';
    let colours = '#';

    for (let i = 0; i < 6; i++) {
      colours = colours + symbols[Math.floor(Math.random() * 16)];
    }
    return colours;
  }
}

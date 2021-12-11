import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.css'],
})
export class ColoresComponent implements  AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    this.randomColor();
  }

  public randomColor(): void {
    const symbols = '0123456789ABCDEF';
    let colours = '#';

    for (let i = 0; i < 6; i++) {
      colours = colours + symbols[Math.floor(Math.random() * 16)];
    }

    const p = document.getElementById('color');
    p!.style.setProperty('color', colours);
  }

}

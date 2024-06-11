// user-list.component.ts
import { Component, inject } from '@angular/core';
import { TetrisEngineService } from '../../tetris-engine.service';


@Component({
  selector: 'drop-button',
  styles: [
    `.drop-button {
        background-color: blue;
    }`,
  ],
  template: `
        <button 
          class="drop-button h-16 w-16 rounded-full"
          (click)="handleClick()"
        >
        </button>
    `,
})


export class DropButtonComponent {

  #tetrisEngine = inject(TetrisEngineService)

  handleClick () {
  }
  
}
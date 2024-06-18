// user-list.component.ts
import { Component, inject } from '@angular/core';
import { GameStateService } from '../../game-state.service';


@Component({
  selector: 'drop-button',
  styles: 
    `
    .drop-button {
        background-color: grey;
    }
  `,
  template: `
        <button 
          class="drop-button h-20 w-20 rounded-full"
          (click)="handleClick()"
        >
        </button>
    `,
})


export class DropButtonComponent {

    #tetrisEngine = inject(GameStateService)

    handleClick () {

        this.#tetrisEngine.dropdownTetrimino()
    }
  
}
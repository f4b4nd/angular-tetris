// user-list.component.ts
import { Component, inject } from '@angular/core';
import { GameService } from '../../game.service';


@Component({
    selector: 'drop-button',
      styles: `
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

    #gameService = inject(GameService)

    handleClick () {

        this.#gameService.toggleIsPaused()
    }
  
}
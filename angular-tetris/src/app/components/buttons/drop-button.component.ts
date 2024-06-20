// user-list.component.ts
import { Component, inject } from '@angular/core';
import { GameService } from '../../game.service';


@Component({
    selector: 'drop-button',
    styles: `
        .drop-button {
            background-color: grey;
            box-shadow: 0 -3px 6px #fff9 inset;

            &:active {
                transform: rotate(180deg);
            }
        }
    `,
    template: `
        <div class="button-wrapper">
            <button 
            class="drop-button h-20 w-20 rounded-full"
            (click)="handleClick()"
            >
            </button>
        </div>
    `,
})


export class DropButtonComponent {

    #gameService = inject(GameService)

    handleClick () {

        this.#gameService.dropdownTetrimino()
    }
  
}
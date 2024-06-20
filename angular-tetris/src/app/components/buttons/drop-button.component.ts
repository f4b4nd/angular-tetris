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

        label {
            font-size: 14px;
        }
    `,
    template: `
        <div class="button-wrapper flex flex-col">
            <button 
            class="drop-button rounded-full"
            (click)="handleClick()"
            >
            </button>
            <label>Drop (Space)</label>
        </div>
    `,
})


export class DropButtonComponent {

    #gameService = inject(GameService)

    handleClick () {

        this.#gameService.dropdownTetrimino()
    }
  
}
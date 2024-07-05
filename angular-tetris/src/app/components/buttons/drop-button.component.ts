import { Component, inject } from '@angular/core';
import { GameService } from '../../state/game.service';


@Component({
    selector: 'drop-button',
    standalone: true,
    styles: `
        .drop-button {
            background-color: grey;
            box-shadow: 0 -3px 6px #fff9 inset;

            &:active {
                transform: rotate(180deg);
                transition: transform 0s;
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

        this.#gameService.dropdownTetromino()
    }
  
}
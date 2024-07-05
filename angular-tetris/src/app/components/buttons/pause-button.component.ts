import { Component, inject } from '@angular/core'
import { GameService } from '../../game.service'

@Component({
    selector: 'pause-button',
    standalone: true,
    styles: `
        .pause-button {
            background-color: black;
            height: 15px;
            width: 60px;
            box-shadow: 0 -3px 6px #fff9 inset;
            
            &:active {
                transform: rotate(180deg);
            }
        }

        .button-wrapper {
            transform: rotate(-15deg);            
        }

        label {
            font-size: 14px;
            text-transform: capitalize;
        }

    `,
    template: `
        <div class="button-wrapper flex flex-col items-center">
            <button 
                class="pause-button rounded-lg" 
                (click)="handleClick()"
            >
            </button>
            <label>Pause</label>
        </div>
    `,
})


export class PauseButtonComponent {

    #gameservice = inject(GameService)

    handleClick () {

        this.#gameservice.toggleIsPaused()

    }
    
}
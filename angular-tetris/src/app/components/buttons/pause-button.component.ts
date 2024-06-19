import { Component, inject } from '@angular/core'
import { GameService } from '../../game.service'

@Component({
    selector: 'pause-button',
    styles: `
        .pause-button {
            background-color: black;
            height: 15px;
            width: 60px;
        }

        .button-wrapper {
            transform: rotate(-15deg);
        }

    `,
    template: `
        <div class="button-wrapper">
            <button 
                class="pause-button rounded-lg" 
                (click)="handleClick()"
            >
            </button>
        </div>
    `,
})


export class PauseButtonComponent {

    #gameservice = inject(GameService)

    handleClick () {

        this.#gameservice.toggleIsPaused()

    }
    
}
import { Component, inject } from '@angular/core'
import { GameStateService } from '../../game-state.service'

@Component({
    selector: 'pause-button',
    styles: `
        .pause-button {
            background-color: black;
            height: 15px;
            width: 60px;
        }
    `,
    template: `
        <button 
            class="pause-button rounded-lg" 
            (click)="handleClick()"
        >
        </button>
    `,
})


export class PauseButtonComponent {

    #tetrisEngine = inject(GameStateService)

    handleClick () {

        this.#tetrisEngine.toggleIsPaused()

        if (!this.#tetrisEngine.isPaused) {
            this.#tetrisEngine.runGame()
        }

    }
    
}
import { Component, inject } from '@angular/core'
import { TetrisEngineService } from '../../tetris-engine.service'

@Component({
    selector: 'pause-button',
    styles: `
        .pause-button {
            background-color: grey;
        }
    `,
    template: `
        <button 
            class="pause-button rounded h-2 w-7" 
            (click)="handleClick()"
        >
        </button>
    `,
})


export class PauseButtonComponent {

    #tetrisEngine = inject(TetrisEngineService)

    handleClick () {
      this.#tetrisEngine.spawnTetrimino()
      console.log(this.#tetrisEngine.grid)
    }
    
}
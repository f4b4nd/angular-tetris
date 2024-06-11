import { Component, inject } from '@angular/core'
import { TetrisEngineService } from '../../tetris-engine.service'

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

    #tetrisEngine = inject(TetrisEngineService)

    handleClick () {
      this.#tetrisEngine.spawnTetrimino()
      console.log(this.#tetrisEngine.grid)
    }
    
}
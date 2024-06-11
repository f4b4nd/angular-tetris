import { Component, Input, OnInit, inject } from '@angular/core'
import { TetrisEngineService } from '../../tetris-engine.service'

@Component({
    selector: 'directionnal-button',
    styles: [
        `.directionnal-button {
            background-color: blue;
        }`,
    ],
    template: `
        <button
            class="directionnal-button h-6 w-6 rounded-full"
            (click)="handleClickButton(direction)"
        >
        </button>
    `,
})


export class DirectionnalButtonComponent implements OnInit {

    @Input() direction?: Direction
    #tetrisEngineService = inject(TetrisEngineService)

    handleClickButton (direction: Direction | undefined) {

        switch(direction) {
            case 'down':
                this.#tetrisEngineService.moveDownTetrimino()
                console.log(this.#tetrisEngineService.currentTetrimino)
                break
            case 'left':
                this.#tetrisEngineService.moveHorizontalTetrimino('left')
                console.log(this.#tetrisEngineService.currentTetrimino)
                break
            case 'right':
                this.#tetrisEngineService.moveHorizontalTetrimino('right')
                console.log(this.#tetrisEngineService.currentTetrimino)
                break
            case 'up':
                this.#tetrisEngineService.rotateTetrimino()
                console.log(this.#tetrisEngineService.currentTetrimino)
                break
            default:
                return
        }
    }   
    
    ngOnInit() {
        console.log('direction >>', this.direction)
    }

}
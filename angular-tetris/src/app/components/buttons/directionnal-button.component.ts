import { Component, Input, OnInit, inject } from '@angular/core'
import { TetrisEngineService } from '../../tetris-engine.service'

@Component({
    selector: 'directionnal-button',
    template: `
        <button
            class="border border-black h-4 w-4"
            (click)="handleClickButton(direction)"
        >
        </button>
    `,
})


export class DirectionnalButtonComponent implements OnInit {

    @Input() direction?: Direction
    #tetrisEngineService = inject(TetrisEngineService)

    //readonly gameFeature = injectGameFeature()

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
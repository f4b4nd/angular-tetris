import { Component, Input, OnInit } from '@angular/core'
import { injectGameFeature } from '../../game.store'


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

    readonly gameFeature = injectGameFeature()

    handleClickButton (direction: Direction | undefined) {

        switch(direction) {
            case 'down':
                this.gameFeature.moveDownTetrimino()
                console.log(this.gameFeature.currentTetrimino())
                break
            case 'left':
                this.gameFeature.moveLeftTetrimino()
                console.log(this.gameFeature.currentTetrimino())
                break
            case 'right':
                this.gameFeature.moveRightTetrimino()
                console.log(this.gameFeature.currentTetrimino())
                break
            case 'up':
                this.gameFeature.rotateTetrimino()
                console.log(this.gameFeature.currentTetrimino())
                break
            default:
                return
        }
    }   
    
    ngOnInit() {
        console.log('direction >>', this.direction)
    }

}
import { Component, Input, OnInit } from '@angular/core'
import { injectGridFeature } from '../../grid.store'


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

    readonly gridFeature = injectGridFeature()

    handleClickButton (direction: Direction | undefined) {

        console.log(direction)
        switch(direction) {
            case 'down':
                this.gridFeature.moveDownTetrimino()
                console.log(this.gridFeature.activeTetrimino())
                break
            case 'left':
                this.gridFeature.moveLeftTetrimino()
                console.log(this.gridFeature.activeTetrimino())
                break
            case 'right':
                this.gridFeature.moveRightTetrimino()
                console.log(this.gridFeature.activeTetrimino())
                break
            case 'up':
                this.gridFeature.rotateTetrimino()
                console.log(this.gridFeature.activeTetrimino())
                break
            default:
                return
        }
    }   
    
    ngOnInit() {
        console.log('direction >>', this.direction)
    }

}
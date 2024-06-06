import { Component, Input, OnInit } from '@angular/core'
import { injectGridFeature } from '../../grid.store'

export type DirectionsOptions = 'up' | 'down' | 'left' | 'right'


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

    @Input() direction?: DirectionsOptions

    readonly gridFeature = injectGridFeature()

    handleClickButton (direction: DirectionsOptions | undefined) {

        console.log(direction)
        switch(direction) {
            case 'down':
                this.gridFeature.dropTetrimino()
                console.log(this.gridFeature.activeTetrimino())
            return
        }
    }   
    
    ngOnInit() {
        console.log('direction >>', this.direction)
    }

}
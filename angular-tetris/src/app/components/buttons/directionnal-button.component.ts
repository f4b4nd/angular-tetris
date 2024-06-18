import { Component, Input, OnInit, inject } from '@angular/core'
import { GameStateService } from '../../game-state.service'

@Component({
    selector: 'directionnal-button',
    styles: 
        `
        $grey: #513d39;

      
    `,
    template: `
        <button
            [ngClass]="['directionnal-button', 'rounded-full', bgColor ?? '']"
            (click)="handleClickButton(direction)"
        >
        </button>
    `,
})


export class DirectionnalButtonComponent implements OnInit {

    @Input() direction?: Direction
    @Input() bgColor?: string

    #gameStateService = inject(GameStateService)

    handleClickButton (direction: Direction | undefined) {

        switch(direction) {
            case 'down':
                this.#gameStateService.moveDownTetrimino()
                console.log(this.#gameStateService.currentTetrimino)
                break
            case 'left':
                this.#gameStateService.moveHorizontalTetrimino('left')
                console.log(this.#gameStateService.currentTetrimino)
                break
            case 'right':
                this.#gameStateService.moveHorizontalTetrimino('right')
                console.log(this.#gameStateService.currentTetrimino)
                break
            case 'up':
                this.#gameStateService.rotateTetrimino()
                console.log(this.#gameStateService.currentTetrimino)
                break
            default:
                return
        }
    }   
    
    ngOnInit() {
        console.log('direction >>', this.direction)
    }

}
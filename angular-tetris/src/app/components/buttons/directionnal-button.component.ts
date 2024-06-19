import { Component, Input, OnInit, inject } from '@angular/core'
import { GameService } from '../../game.service'

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


export class DirectionnalButtonComponent {

    @Input() direction?: Direction
    @Input() bgColor?: string

    #gameService = inject(GameService)
    
    handleClickButton (direction: Direction | undefined) {

        switch(direction) {
            case 'down':
                this.#gameService.moveDownTetrimino()
                console.log(this.#gameService.currentTetrimino)
                break
            case 'left':
                this.#gameService.moveHorizontalTetrimino('left')
                console.log(this.#gameService.currentTetrimino)
                break
            case 'right':
                this.#gameService.moveHorizontalTetrimino('right')
                console.log(this.#gameService.currentTetrimino)
                break
            case 'up':
                this.#gameService.rotateTetrimino()
                console.log(this.#gameService.currentTetrimino)
                break
            default:
                return
        }
    }   
    

}
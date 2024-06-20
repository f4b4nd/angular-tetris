import { Component, Input, OnInit, inject } from '@angular/core'
import { GameService } from '../../game.service'

@Component({
    selector: 'directionnal-button',
    styles: 
        `
        $red: red;
        $yellow: #D4AC0D;
        $blue: blue;
        $green: green;

        .directionnal-button {

            box-shadow: 0 -3px 6px #fff9 inset;

            &:active {
                transform: rotate(180deg);
            }

            &.red {
                background-color: $red;
            }

            &.blue {
                background-color: $blue;
            }

            &.yellow {
                background-color: $yellow;
            }

            &.green {
                background-color: $green;
            }
        }


      
    `,
    template: `
        <button
            class="directionnal-button rounded-full"  
            [ngClass]="[classNames]"
            (click)="handleClickButton(direction)"
        >
        </button>
    `,
})


export class DirectionnalButtonComponent {

    @Input() direction?: Direction
    @Input() classNames: string = ''

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
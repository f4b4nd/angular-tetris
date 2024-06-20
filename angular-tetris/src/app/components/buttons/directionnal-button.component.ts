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

        .directionnal-button__wrapper {
            position: relative;
        }

        em {
            position: absolute;
            display: block;
            height: 0;
            width: 0;
            border: 7px solid;
            border-color: transparent transparent #111;
        }

        label {
            font-size: 14px;
            text-transform: capitalize;
        }

      
    `,
    template: `
        <div class="directionnal-button__wrapper flex flex-col items-center">
            <button
                class="directionnal-button rounded-full"  
                [ngClass]="[classNames]"
                (click)="handleClickButton(direction)"
            >
            </button>
            <label class="text">{{direction}}</label>
        </div>
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
            case 'rotation':
                this.#gameService.rotateTetrimino()
                console.log(this.#gameService.currentTetrimino)
                break
            default:
                return
        }
    }   
    

}
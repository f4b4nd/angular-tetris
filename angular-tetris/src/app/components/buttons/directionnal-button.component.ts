import { Component, HostListener, Input, inject } from '@angular/core'
import { GameService } from '../../state/game.service'
import { NgClass } from '@angular/common'

@Component({
    selector: 'directionnal-button',
    standalone: true,
    imports: [NgClass],
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
                this.#gameService.moveDownTetromino()
                break
            case 'left':
                this.#gameService.moveHorizontalTetromino('left')
                break
            case 'right':
                this.#gameService.moveHorizontalTetromino('right')
                break
            case 'rotation':
                this.#gameService.rotateTetromino()
                break
            default:
                return
        }
    }

    @HostListener('document:keydown', ['$event'])
    keyEvent (event: KeyboardEvent){
        switch (event.key) {
            case 'ArrowDown':
                this.#gameService.moveDownTetromino()
                event.preventDefault()
                break
            case 'ArrowLeft':
                this.#gameService.moveHorizontalTetromino('left')
                event.preventDefault();
                break
            case 'ArrowRight':
                this.#gameService.moveHorizontalTetromino('right')
                event.preventDefault();
                break
            case 'ArrowUp':
                this.#gameService.rotateTetromino()
                event.preventDefault();
                break
            default:
                return
        }
       
    }
    

}
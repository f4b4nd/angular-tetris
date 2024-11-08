import { Component, inject } from '@angular/core'
import { GameService } from '../../state/game.service'

@Component({
    selector: 'power-switch-button',
    standalone: true,
    styles: 
        `
        $grey: #696969;
        $blue: #2196F3;
        $red: red;
        $black: black;
        $white: white;

        .switch {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;
        }
             
        input {
            opacity: 0;
            width: 0;
            height: 0;
        }
        
        .slider {

            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: $black;
            -webkit-transition: .4s;
            transition: .4s;

            &:before {
                position: absolute;
                content: "";
                height: 26px;
                width: 26px;
                left: 4px;
                bottom: 4px;
                background-color: $grey;
                -webkit-transition: .4s;
                transition: .4s;
            }
            
        }

        .slider.round {
            border-radius: 34px;

            &:before {
                border-radius: 50%;
            }
        }

        input:checked + .slider {
            background-color: $black;
        }
          
        input:checked + .slider:before {
            background-color: $red;

            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);
        }
        .btn-label {
            font-size: 13px;
        }
    `,
    template: `
        <div class="power-switch-button__wrapper flex flex-col items-center">
            <label class="switch">
                <input 
                    type="checkbox"
                    class="h-4 w-4"
                    (change)="onChange($event)"
                >
                <span class="slider round"></span>
            </label>
            <span class="btn-label">ON/OFF</span>
        </div>
    `,
})


export class PowerSwitchButtonComponent {

    #gameService = inject(GameService)

    onChange ($event: Event) {

        const isChecked = ($event.target as HTMLInputElement).checked

        if (!isChecked) {
            if (confirm("You're having a good time. Are you sure you want to turn-off ?")) {
                this.#gameService.resetGame()
            }
            return
        }

        this.#gameService.startGame()

    }

}
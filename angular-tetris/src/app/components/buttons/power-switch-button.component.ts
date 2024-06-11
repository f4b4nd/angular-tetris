import { Component } from '@angular/core'

@Component({
    selector: 'power-switch-button',
    styles: 
        `
        $grey: #ccc;
        $blue: #2196F3;
        $red: orange;

        .switch {
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;
          }
        
        .switch input {
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
            background-color: green;
            -webkit-transition: .4s;
            transition: .4s;

            &:before {
                position: absolute;
                content: "";
                height: 26px;
                width: 26px;
                left: 4px;
                bottom: 4px;
                background-color: $red;
                -webkit-transition: .4s;
                transition: .4s;
            }
        }
        
        
        input:checked + .slider {
            background-color: $grey;
        }
          
        input:focus + .slider {
            box-shadow: 0 0 1px $grey;
        }

        input:checked + .slider:before {
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);
        }

        .slider.round {

            border-radius: 34px;

            &::before {
                border-radius: 50%;
            }
        }

    `,
    template: `
        <label class="switch">
            <input 
                checked
                type="checkbox"
                class="h-4 w-4"
            >
            <span class="slider round"></span>
        </label>
    `,
})


export class PowerSwitchButtonComponent {

}
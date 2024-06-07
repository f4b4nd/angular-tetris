import { Component, Input } from '@angular/core'

@Component({
    selector: 'gameboard-info-box',
    template: `
        <div class="border border-black w-14 flex flex-col">

            <div class="">
                {{title}}
            </div>

            <div class="">
                {{text}}
            </div>
        </div>
    `,
})


export class GameboardInfoBoxComponent {

    @Input() title?: string
    @Input() text?: any


}
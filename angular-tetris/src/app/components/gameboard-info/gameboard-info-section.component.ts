import { Component, Input } from '@angular/core'

@Component({
    selector: 'gameboard-info-section',
    template: `
        <div class="gameboard-info-section__wrapper border border-black flex flex-col">

            <div class="gameboard-info-section__title">
                {{title}}
            </div>

            <div *ngIf="text" class="gameboard-info-section__text">
                {{text}}
            </div>

        </div>
    `,
})


export class GameboardInfoSectionComponent {

    @Input() title?: string
    @Input() text?: string|null


}
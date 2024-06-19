import { Component, Input } from '@angular/core'

@Component({
    selector: 'gameboard-info-section',
    template: `
        <div class="gameboard-info-section__wrapper flex flex-col" [ngClass]=[classNames]>

            <div *ngIf="title" class="gameboard-info-section__title font-bold">
                {{title}}
            </div>

            <div *ngIf="text" class="gameboard-info-section__text">
                {{text}}
            </div>

        </div>
    `,
})


export class GameboardInfoSectionComponent {

    @Input() title?: string|null
    @Input() text?: string|null
    @Input() classNames: string = ''

}
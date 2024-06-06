import { Component, Input } from '@angular/core'
import { tetriminoModels } from '../../tetrimino.model'
@Component({
    selector: 'directionnal-button',
    template: `
        <button (click)="addTetrimino()" class="border border-black h-4 w-4">
        </button>
    `,
})


export class DirectionnalButtonComponent {

    @Input() direction: string | undefined

    //readonly gridFeature = injectGridFeature()

    addTetrimino () {
        const t = tetriminoModels[0]
        console.log(t)
       // this.gridFeature.addTetrimino(t)
    }

}
import { Component } from '@angular/core'
import { injectGameFeature } from '../../game.store'

@Component({
    selector: 'gameboard-info',
    template: `
        <div class="border border-black w-14">

            <gameboard-info-box title="score" [text]="gameFeature.score() | tostring"></gameboard-info-box>
            <gameboard-info-box title="next"></gameboard-info-box>
            <gameboard-info-box title="firstname"></gameboard-info-box>
        </div>
    `,
})


export class GameboardInfoComponent {

    gameFeature = injectGameFeature()

}
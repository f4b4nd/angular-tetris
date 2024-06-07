import { Component } from '@angular/core'

@Component({
    selector: 'gameboard-info',
    template: `
        <div class="border border-black w-14">

            <gameboard-info-box title="score"></gameboard-info-box>
            <gameboard-info-box title="next"></gameboard-info-box>
            <gameboard-info-box title="firstname"></gameboard-info-box>
        </div>
    `,
})


export class GameboardInfoComponent {

}
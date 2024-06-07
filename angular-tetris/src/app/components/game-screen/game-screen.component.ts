import { Component } from '@angular/core'

@Component({
    selector: 'game-screen',
    template: `
        <div 
            id="game-screen" 
            class="border border-black flex items-stretch"
        >

            <gameboard-grid></gameboard-grid>

            <gameboard-info class="border border-black"></gameboard-info>

        </div>
    `,
})


export class GameScreenComponent {


}
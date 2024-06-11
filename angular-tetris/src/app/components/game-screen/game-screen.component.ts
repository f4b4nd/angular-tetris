import { Component } from '@angular/core'

@Component({
    selector: 'game-screen',
    styles: `
        .game-screen {
            background-color: #9ead86;
        }
    `,
    template: `
        <div 
            id="game-screen" 
            class="game-screen border border-black inline-flex mx-auto justify-between h-full"
        >

            <gameboard-grid class="p-2"></gameboard-grid>

            <gameboard-info class="p-2 border border-black"></gameboard-info>

        </div>
    `,
})


export class GameScreenComponent {


}
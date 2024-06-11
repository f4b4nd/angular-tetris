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
            class="game-screen border border-black flex items-stretch"
        >

            <gameboard-grid></gameboard-grid>

            <gameboard-info class="border border-black"></gameboard-info>

        </div>
    `,
})


export class GameScreenComponent {


}
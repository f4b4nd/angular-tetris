import { Component, OnInit, inject } from '@angular/core'
import { GameStateService } from '../../game-state.service'

@Component({
    selector: 'game-screen',
    styles: `
        .game-screen {
            background-color: #9ead86;
        }
    `,
    template: `
        <div 
            class="game-screen border border-black inline-flex mx-auto justify-between h-full"
        >

            <grid
                *ngIf="gameStateService.grid"
                gridSize="grid-lg" 
                tileSize="tile-lg" 
                [grid]="gameStateService.grid" 
                class="p-2"
                classNames="border-2 border-black p-0.5"
            />

            <gameboard-info 
                class="p-2"
            />

        </div>
    `,
})


export class GameScreenComponent {

    gameStateService = inject(GameStateService)


}
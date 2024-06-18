import { Component, OnInit, inject } from '@angular/core'
import { TetrisEngineService } from '../../tetris-engine.service'

@Component({
    selector: 'game-screen',
    styles: `
        .game-screen {
            background-color: #9ead86;
        }
    `,
    template: `
        <div 
            class="game-screen border border-black  inline-flex mx-auto justify-between h-full"
        >

            <grid
                *ngIf="tetrisEngineService.grid"
                gridSize="grid-lg" 
                tileSize="tile-lg" 
                [grid]="tetrisEngineService.grid" 
                class="p-2"
                classNames="border-2 border-black p-0.5"
            />

            <gameboard-info 
                class="p-2"
            />

        </div>
    `,
})


export class GameScreenComponent implements OnInit {

    tetrisEngineService = inject(TetrisEngineService)


    ngOnInit() {
        this.tetrisEngineService.resetGame()
    }

}
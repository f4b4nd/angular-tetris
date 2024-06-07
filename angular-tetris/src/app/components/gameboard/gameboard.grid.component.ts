import { Component, OnInit, inject } from '@angular/core'
import { injectGameFeature } from '../../game.store'

@Component({
    selector: 'gameboard-grid',
    template: `
        <div 
            id="gameboard-grid" 
            class="border-2 border-black m-4 p-0.5"
        >

            <div class="gameboard-grid__inner flex flex-col gap-0.5">

                @for (row of gameFeature.grid(); track row) {

                    <div name="gameboard-row" class="flex gap-1">

                        @for (cell of row; track cell) {
                            <gameboard-cell [isActive]="cell === 1"></gameboard-cell>
                        }

                    </div>
                }
            
            </div>

        </div>
    `
})


export class GameboardGridComponent implements OnInit {

    gameFeature = injectGameFeature()

    ngOnInit() {

        this.gameFeature.spawnTetrimino()

        console.log('active>>', this.gameFeature.activeTetrimino())

    }


}

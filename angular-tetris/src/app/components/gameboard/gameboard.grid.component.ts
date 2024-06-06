import { Component, OnInit, inject } from '@angular/core'
import { injectGridFeature } from '../../grid.store'
import { tetriminoModels } from '../../tetrimino.model'

@Component({
    selector: 'gameboard-grid',
    template: `
        <div 
            id="gameboard-grid" 
            class="border-2 border-black m-4 p-0.5"
        >

            <div class="gameboard-grid__inner flex flex-col gap-0.5">

                @for (row of gridFeature.grid(); track row) {

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

    gridFeature = injectGridFeature()

    ngOnInit() {

        this.gridFeature.spawnTetrimino(tetriminoModels)

        console.log('active>>', this.gridFeature.activeTetrimino())

    }


}

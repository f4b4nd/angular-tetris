import { Component, OnInit, inject, Inject } from '@angular/core'
import { TetrisEngineService } from '../../tetris-engine.service'

@Component({
    selector: 'gameboard-grid',
    template: `
        <div 
            id="gameboard-grid" 
            class="border-2 border-black p-0.5"
        >

            <div class="gameboard-grid__inner flex flex-col gap-0.5">

                @for (row of tetrisEngineService.grid; track row) {

                    <div name="gameboard-row border border-black" class="flex gap-1">

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

    tetrisEngineService = inject(TetrisEngineService)

    //constructor (@Inject(TetrisEngineService) private tetrisEngine: TetrisEngineService) {}
    
    ngOnInit() {
        this.tetrisEngineService.resetGame()
    }

}

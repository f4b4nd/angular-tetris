import { Component, Input, inject } from '@angular/core'
import { TetrisEngineService } from '../../tetris-engine.service'

@Component({
    selector: 'gameboard-info-box-grid',
    template: `
        <div 
            id="gameboard-info-box-grid" 
            class="border-2 border-black"
        >

            <div class="gameboard-grid__inner flex flex-col gap-0.5">

                @for (row of tetrisEngineService.grid; track row) {

                    <div name="gameboard-row" class="flex gap-1">

                        @for (cell of row; track cell) {
                            <gameboard-cell [isActive]="cell === 1"></gameboard-cell>
                        }

                    </div>
                }
            
            </div>

        </div>
    `,
})


export class GameboardInfoBoxGridComponent {

    @Input() title?: string
    @Input() text?: string | null

    tetrisEngineService = inject(TetrisEngineService)
    
}
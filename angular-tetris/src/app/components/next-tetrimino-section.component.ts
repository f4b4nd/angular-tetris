import { Component, Input } from "@angular/core"

@Component({
    selector: 'next-tetrimino-section',
    template: `
        <div class="next-box__wrapper">

            <div class="next-tetrimino-section__title text-center">
                Next
            </div>
    
            <grid 
                gridSize="grid-sm" 
                tileSize="tile-sm" 
                [grid]="tetrimino?.shape || emptyTetriminoShape"
            />
                
        </div>
    `,
})

export class NextTetriminoSectionComponent {

    @Input() tetrimino: Tetrimino | null | undefined

    emptyTetriminoShape = Array(3).fill(Array(3).fill(0))

}

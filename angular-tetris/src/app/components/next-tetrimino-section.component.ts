import { Component, Input } from "@angular/core"

@Component({
    selector: 'next-tetrimino-section',
    template: `
        <div class="next-box__wrapper" [ngClass]=[classNames]>

            <div class="next-tetrimino-section__title text-center font-bold">
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
    @Input() classNames: string = ''

    emptyTetriminoShape = Array(3).fill(Array(3).fill(0))
    

}

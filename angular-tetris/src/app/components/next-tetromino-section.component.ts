import { NgClass } from "@angular/common"
import { Component, Input } from "@angular/core"
import { GridComponent } from "./grid/grid.component"

@Component({
    selector: 'next-tetromino-section',
    standalone: true,
    imports: [GridComponent, NgClass],
    template: `
        <div class="next-box__wrapper" [ngClass]=[classNames]>

            <div class="next-tetromino-section__title text-center font-bold">
                Next
            </div>
    
            <grid 
                gridSize="grid-sm" 
                tileSize="tile-sm" 
                [grid]="tetromino?.nextShape || emptyTetrominoShape"
            />
                
        </div>
    `,
})

export class NextTetrominoSectionComponent {

    @Input() tetromino: Tetromino | null | undefined
    @Input() classNames: string = ''

    emptyTetrominoShape = Array(2).fill(Array(4).fill(0))
    

}

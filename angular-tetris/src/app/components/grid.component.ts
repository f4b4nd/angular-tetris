import { Component, Input } from '@angular/core'
import { TileComponent } from './tile.component'
import { NgClass, NgIf } from '@angular/common'

@Component({
    selector: 'grid',
    standalone: true,
    imports: [
        TileComponent,
        NgClass, 
        NgIf,
    ],
    styles: `
        .grid-sm {
            
            .grid__wrapper {
                gap: 0.125rem;
            }

            .grid__row {
                gap: 0.125rem;
            }
        }

        .grid-lg {

            .grid__wrapper {
                gap: 0.125rem;
            }

            .grid__row {
                gap: 0.20rem;
            }
        }
        
    `,
    template: `
        <div name="grid" [ngClass]="[gridSize, classNames]">

            <div *ngIf="grid" class="grid__wrapper flex flex-col items-center">
                
                @for (row of grid; track row) {

                    <div class="grid__row flex">

                        @for (cell of row; track cell) {
                            <tile 
                                *ngIf="gridSize" 
                                [size]="tileSize" 
                                [isActive]="cell === 1" 
                            />
                        }

                    </div>
                }
            
            </div>

        </div>
    `
})


export class GridComponent {

    @Input() grid?: Matrix
    @Input() gridSize?: 'grid-sm' | 'grid-lg'
    @Input() tileSize?: 'tile-sm' | 'tile-lg'
    @Input() classNames: string = ''

}

import { Component, Input } from '@angular/core'

@Component({
    selector: 'gameboard-cell',
    styles: `
        [name='gameboard-cell-inner'] {
            height: 0.9rem;
            width: 0.9rem;
        }
    `,
    template: `
        <div name="gameboard-cell" class="border border-black">

            <div 
                name="gameboard-cell-inner" 
                [ngClass]="[ isActive ? 'bg-black' : '' ]"
            >

            </div>
            
        </div>
    `
})


export class GameboardCellComponent {
    
    @Input() isActive?: boolean

}
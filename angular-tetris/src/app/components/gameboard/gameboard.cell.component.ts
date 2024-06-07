import { Component, Input } from '@angular/core'

@Component({
    selector: 'gameboard-cell',
    template: `
        <div name="gameboard-cell" class="border border-black">

            <div 
                name="gameboard-cell-inner" 
                [ngClass]="['w-2', 'h-2', isActive ? 'bg-black' : '' ]"
            >

            </div>
            
        </div>
    `
})


export class GameboardCellComponent {
    
    @Input() isActive?: boolean

}
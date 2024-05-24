import { Component, Input } from '@angular/core'

@Component({
    selector: 'gameboard-cell',
    template: `
        <div name="gameboard-cell" class="border-2 border-black">

            <div 
                name="gameboard-cell-inner" 
                [ngClass]="['border-0.5', 'border-black', 'w-2', 'h-2', isActive ? 'bg-black' : '' ]"
            >

            </div>
            
        </div>
    `
})


export class GameboardCellComponent {
    
    @Input() isActive: boolean|undefined

}
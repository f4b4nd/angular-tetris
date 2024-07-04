import { NgClass } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
    selector: 'tile',
    standalone: true,
    imports: [NgClass],
    styles: `
        [name='tile'] {

            &.tile-lg {
                height: 0.8rem;
                width: 0.8rem;
            }

            &.tile-sm {
                height: 0.5rem;
                width: 0.5rem;
            }

        }
    `,
    template: `
        <div name="tile__wrapper" class="border border-black">

            <div 
                name="tile" 
                [ngClass]="[size, isActive ? 'bg-black' : '' ]"
            >

            </div>
            
        </div>
    `
})


export class TileComponent {
    
    @Input() isActive?: boolean
    @Input() size?: 'tile-sm' | 'tile-lg'

}
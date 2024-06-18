import { Component, Input } from '@angular/core'

@Component({
    selector: 'tile',
    styles: `
        [name='tile__inner'] {

            &.tile-lg {
                height: 0.9rem;
                width: 0.9rem;
            }

            &.tile-sm {
                height: 0.5rem;
                width: 0.5rem;
            }

        }
    `,
    template: `
        <div name="tile" class="border border-black">

            <div 
                name="tile__inner" 
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
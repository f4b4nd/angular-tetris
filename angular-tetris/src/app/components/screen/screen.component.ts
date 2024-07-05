import { Component, inject } from '@angular/core'
import { GameService } from '../../state/game.service'
import { GridComponent } from '../grid.component'
import { ScreenInfoComponent } from './screen.info.component'

@Component({
    selector: 'screen',
    standalone: true,
    imports: [GridComponent, ScreenInfoComponent],
    styles: `
        .screen {
            background-color: #9ead86;
        }
    `,
    template: `
        <div 
            class="screen border border-black inline-flex mx-auto justify-between h-full"
        >

            <grid
                [grid]="gameService.grid" 
                gridSize="grid-lg" 
                tileSize="tile-lg" 
                class="p-2"
                classNames="border-2 border-black p-0.5"
            />

            <screen-info 
                class="p-2"
            />

        </div>
    `,
})


export class ScreenComponent {

    gameService = inject(GameService)

}
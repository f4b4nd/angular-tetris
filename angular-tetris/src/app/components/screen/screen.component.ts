import { Component, inject } from '@angular/core'
import { GameService } from '../../state/game.service'
import { GridComponent } from '../grid.component'
import { ScreenInfoComponent } from './screen.info.component'
import { ScreenGridTextComponent } from './screen.text.component'
import { NgIf } from '@angular/common'

@Component({
    selector: 'screen',
    standalone: true,
    imports: [GridComponent, ScreenInfoComponent, ScreenGridTextComponent, NgIf],
    styles: `
        $green-sage: #9ead86;
        
        .screen {
            background-color: $green-sage;
        }
    `,
    template: `
        <div 
            class="screen border border-black inline-flex mx-auto justify-between h-full relative"
        >

            <grid
                [grid]="gameService.grid" 
                gridSize="grid-lg" 
                tileSize="tile-lg"
                [tileOpacity]="gameService.isPaused || gameService.isGameOver ? 'opacity-25' : ''"
                class="p-2"
                classNames="border-2 border-black p-0.5"
            />

            <screen-grid-text 
                *ngIf="gameService.isPaused && !gameService.isGameOver" 
                class="absolute top-[44%] left-[23%] text-2xl "
                text="PAUSE" 
            />

            <screen-grid-text 
                *ngIf="gameService.isGameOver" 
                class="absolute top-[44%] left-[10%] text-xl"
                text="Turn ON to start" 
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
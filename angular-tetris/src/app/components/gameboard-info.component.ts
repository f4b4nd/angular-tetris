import { Component, inject } from '@angular/core'
import { Observable, map, timer, merge } from 'rxjs'
import { GameService } from '../state/game.service'
import { ClockComponent } from './clock.component'
import { CommonModule } from '@angular/common'
import { GameboardInfoSectionComponent } from './gameboard-info-section.component'
import { NextTetrominoSectionComponent } from './next-tetromino-section.component'
import { ToStringPipe } from '../pipes/to-string.pipe'

@Component({
    selector: 'gameboard-info',
    standalone: true,
    imports: [ClockComponent, GameboardInfoSectionComponent, NextTetrominoSectionComponent, ToStringPipe, CommonModule],
    template: `
        <div class="flex flex-col gap-8 h-full w-14">
        
            <gameboard-info-section
                *ngIf="gameService.displayedScore >= 0" 
                title="Score"
                [text]="gameService.displayedScore | tostring" 
                classNames="items-center"
            />
            
            <next-tetromino-section
                [tetromino]="gameService.nextTetromino"
                classNames="flex flex-col gap-1"
            />
 

            <div class="align-self-end mt-auto">

                <gameboard-info-section
                    [title]="(gameService.playerName | uppercase) || ''"
                    classNames="items-center"
                />

                <clock 
                    class="font-bold"
                />
                
            </div>

        </div>
    `,
})


export class GameboardInfoComponent {

    gameService = inject(GameService)

}

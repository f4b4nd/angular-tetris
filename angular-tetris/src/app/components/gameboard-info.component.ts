import { Component, inject } from '@angular/core'
import { Observable, map, timer, merge } from 'rxjs'
import { GameService } from '../game.service'

@Component({
    selector: 'gameboard-info',
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

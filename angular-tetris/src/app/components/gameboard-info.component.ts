import { Component, OnInit, inject } from '@angular/core'
import { Observable, delay, interval, map, startWith } from 'rxjs'
import { GameStateService } from '../game-state.service'

@Component({
    selector: 'gameboard-info',
    template: `
        <div class="flex flex-col gap-8 h-full w-14">

            <gameboard-info-section
                [text]="gameStateService.playerName || ''"
                classNames=""
            />
        
            <gameboard-info-section
                *ngIf="gameStateService.score >= 0" 
                title="Score"
                [text]="gameStateService.score | tostring" 
                classNames="items-center"
            />
            
            <next-tetrimino-section
                [tetrimino]="gameStateService.nextTetrimino"
                classNames="flex flex-col gap-1"
            />
 
            <gameboard-info-section
                [text]="currentDate$ | async | date:'HH : mm' " 
                classNames="border border-black items-center"
                class="align-self-end mt-auto"
            />

        </div>
    `,
})


export class GameboardInfoComponent {

    gameStateService = inject(GameStateService)

    counter$ = interval(1000)

    currentDate$: Observable<Date>

    constructor () {
        this.currentDate$ = this.counter$.pipe(
            map(_ => new Date()),
            startWith(new Date()), 
            delay(0),
        )
    }

}

import { Component, OnInit, inject } from '@angular/core'
import { Observable, delay, interval, map, startWith, timer, merge } from 'rxjs'
import { GameService } from '../game.service'

@Component({
    selector: 'gameboard-info',
    template: `
        <div class="flex flex-col gap-8 h-full w-14">
        
            <gameboard-info-section
                *ngIf="gameService.score >= 0" 
                title="Score"
                [text]="gameService.score | tostring" 
                classNames="items-center"
            />
            
            <next-tetrimino-section
                [tetrimino]="gameService.nextTetrimino"
                classNames="flex flex-col gap-1"
            />
 

            <div class="align-self-end mt-auto">

                <gameboard-info-section
                    [title]="(gameService.playerName | uppercase) || ''"
                    classNames="items-center"
                />

                <clock-blink 
                    [time]="currentTime$ | async" 
                    [blinker]="blinker$ | async"
                />
                
            </div>

        </div>
    `,
})


export class GameboardInfoComponent {

    gameService = inject(GameService)

    counter$ = timer(0, 1000)

    show$ = timer(0, 2000)
    hide$ = timer(1000, 2000)
    
    blinker$: Observable<string>
    currentTime$: Observable<Date>

    constructor () {

        this.currentTime$ = this.counter$.pipe(map(_ => new Date()))


        this.blinker$ = merge(
            this.show$.pipe(map(_ => 'show')),
            this.hide$.pipe(map(_ => 'hide')),
        )
    
    }

}

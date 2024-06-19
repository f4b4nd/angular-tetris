import { Component, OnInit, inject } from '@angular/core'
import { Observable, delay, interval, map, startWith, timer, merge } from 'rxjs'
import { GameService } from '../game.service'
import { LocaleDateService } from '../locale-date.service'

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

                <gameboard-info-section
                    [title]="dateBlinker$ | async"
                    classNames="items-center"
                />
                
            </div>

        </div>
    `,
})


export class GameboardInfoComponent {

    gameService = inject(GameService)
    dateService = inject(LocaleDateService)

    counter$ = timer(0, 2000)
    hide$ = timer(1000, 2000)

    dateBlinker$: Observable<string>
    
    constructor () {

        this.dateBlinker$ = merge(
            this.counter$.pipe(map(_ => this.nowHoursMinutes1())),
            this.hide$.pipe(map(_ => this.nowHoursMinutes2())),
        )
    
    }

    nowHoursMinutes1 (): string {
        return this.dateService.transformDateToHoursMinutes(new Date())?.replace(':', ':') || ''
    }

    nowHoursMinutes2 (): string {
        return this.dateService.transformDateToHoursMinutes(new Date())?.replace(':', ' ') || ''
    }

}

import { Component, OnInit, inject } from '@angular/core'
import { Observable, interval, map } from 'rxjs'
import { TetrisEngineService } from '../../tetris-engine.service'

@Component({
    selector: 'gameboard-info',
    template: `
        <div class="flex flex-col gap-8 h-full w-14">

            <gameboard-info-section
                *ngIf="tetrisEngineService.score >= 0" 
                title="Score"
                [text]="tetrisEngineService.score | tostring" 
                classNames="items-center"
            />
            
            <next-tetrimino-section
                [tetrimino]="tetrisEngineService.nextTetrimino"
                classNames=""
            />
            
            <gameboard-info-section
                *ngIf="tetrisEngineService.playerName" 
                [text]="tetrisEngineService.playerName"
                classNames=""
            />
            
            <gameboard-info-section
                [text]="currentDate$ | async | date:'HH:mm:ss' " 
                class="align-self-end mt-auto"
                classNames="border border-black"
            />

        </div>
    `,
})


export class GameboardInfoComponent {

    tetrisEngineService = inject(TetrisEngineService)

    counter$ = interval(1000)

    currentDate$: Observable<Date> = this.counter$.pipe(map(_ => new Date()))

}

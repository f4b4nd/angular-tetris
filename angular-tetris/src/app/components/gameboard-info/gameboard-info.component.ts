import { Component, OnInit, inject } from '@angular/core'
import { Observable, interval, map } from 'rxjs'
import { TetrisEngineService } from '../../tetris-engine.service'
import { tetriminoModels } from '../../tetrimino.model'

@Component({
    selector: 'gameboard-info',
    template: `
        <div class="border border-black w-14">

            <gameboard-info-section
                *ngIf="tetrisEngineService.score >= 0" 
                title="score"
                [text]="tetrisEngineService.score | tostring" 
            />
            
            <next-tetrimino-section
                [tetrimino]="tetrisEngineService.nextTetrimino"
            />
            
            <gameboard-info-section
                *ngIf="tetrisEngineService.playerName" 
                [text]="tetrisEngineService.playerName" 
            />
            
            <gameboard-info-section
                [text]="currentDate$ | async | date:'HH:mm:ss' " 
            />

        </div>
    `,
})


export class GameboardInfoComponent {

    tetrisEngineService = inject(TetrisEngineService)

    counter$ = interval(1000)

    currentDate$: Observable<Date> = this.counter$.pipe(map(_ => new Date()))

}

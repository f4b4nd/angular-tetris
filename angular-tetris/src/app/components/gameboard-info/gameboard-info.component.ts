import { Component, OnInit, inject } from '@angular/core'
import { Observable, interval, map } from 'rxjs'
import { TetrisEngineService } from '../../tetris-engine.service'

@Component({
    selector: 'gameboard-info',
    template: `
        <div class="border border-black w-14">
            <gameboard-info-box *ngIf="tetrisEngineService.score >= 0" title="score" [text]="tetrisEngineService.score | tostring"></gameboard-info-box>
            <gameboard-info-box title="next"></gameboard-info-box>
            <gameboard-info-box *ngIf="tetrisEngineService.playerName" [text]="tetrisEngineService.playerName"></gameboard-info-box>
            <gameboard-info-box [text]="currentDate$ | async | date:'HH:mm:ss' "></gameboard-info-box>
        </div>
    `,
})


export class GameboardInfoComponent {

    tetrisEngineService = inject(TetrisEngineService)

    counter$ = interval(1000)

    currentDate$: Observable<Date> = this.counter$.pipe(map(_ => new Date()))

}   
import { Component, OnInit } from '@angular/core'
import { injectGameFeature } from '../../game.store'
import { Observable, interval, map } from 'rxjs'

@Component({
    selector: 'gameboard-info',
    template: `
        <div class="border border-black w-14">
            <gameboard-info-box *ngIf="gameFeature.score() >= 0" title="score" [text]="gameFeature.score() | tostring"></gameboard-info-box>
            <gameboard-info-box title="next"></gameboard-info-box>
            <gameboard-info-box *ngIf="gameFeature.playerName()" [text]="gameFeature.playerName() ?? ''"></gameboard-info-box>
            <gameboard-info-box [text]="currentDate$ | async | date:'HH:mm:ss' "></gameboard-info-box>
        </div>
    `,
})


export class GameboardInfoComponent {

    gameFeature = injectGameFeature()

    counter$ = interval(1000)

    currentDate$: Observable<Date> = this.counter$.pipe(map(_ => new Date()))

}   
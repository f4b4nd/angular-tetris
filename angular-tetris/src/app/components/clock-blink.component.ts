import { Component, Input } from "@angular/core";
import { timer, Observable, map, merge } from "rxjs";

@Component({
    selector: 'clock-blink',
    template: `
        <div class="time-blinker flex justify-center">

            <div class="time-blinker__body flex justify-between w-11">

                <span class="time-blinker__hour"> {{currentTime$ | async | date:'HH'}} </span>

                <span class="time-blinker__separator">
                    <span *ngIf="(blinker$ | async) === 'show'" class="colon">:</span>
                </span>

                <span class="time-blinker__minutes"> {{currentTime$ | async  | date:'mm'}} </span>

            </div>

        </div>
    `,
})

export class ClockBlinkComponent {
 
    counter$ = timer(0, 1000)
    currentTime$: Observable<Date>

    show$ = timer(0, 2000)
    hide$ = timer(1000, 2000)
    blinker$: Observable<string>

    constructor () {

        this.currentTime$ = this.counter$.pipe(map(_ => new Date()))

        this.blinker$ = merge(
            this.show$.pipe(map(_ => 'show')),
            this.hide$.pipe(map(_ => 'hide')),
        )
    
    }
}
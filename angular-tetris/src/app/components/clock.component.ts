import { AsyncPipe, DatePipe, NgIf } from "@angular/common";
import { Component } from "@angular/core";
import { timer, Observable, map, merge } from "rxjs";

@Component({
    selector: 'clock',
    standalone: true,
    imports: [AsyncPipe, DatePipe, NgIf], 
    template: `
        <div class="clock flex justify-center">

            <div class="clock__body flex justify-between w-11">

                <span class="clock__hour"> {{currentTime$ | async | date:'HH'}} </span>

                <span class="clock__colon">
                    <span *ngIf="(blinker$ | async) === 'show'" class="colon">:</span>
                </span>

                <span class="clock__minutes"> {{currentTime$ | async  | date:'mm'}} </span>

            </div>

        </div>
    `,
})

export class ClockComponent {
 
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
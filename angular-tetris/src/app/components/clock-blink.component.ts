import { Component, Input } from "@angular/core";

@Component({
    selector: 'clock-blink',
    template: `
        <div class="time-blinker flex justify-center">

            <div class="time-blinker__body flex justify-between w-11">

                <span class="time-blinker__hour"> {{time | date:'HH'}} </span>

                <span class="time-blinker__separator">
                    <span *ngIf="blinker === 'show'" class="colon">:</span>
                </span>

                <span class="time-blinker__minutes"> {{time | date:'mm'}} </span>

            </div>

        </div>
    `,
})

export class ClockBlinkComponent {
 
    @Input() blinker?: string|null
    @Input() time?: Date|null
}
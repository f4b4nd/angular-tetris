import { Component, Input } from '@angular/core'

@Component({
    selector: 'screen-info-text',
    standalone: true,
    imports: [],
    template: `
        <div class="screen-info__text"> {{text}} </div>
    `,
})


export class ScreenInfoTextComponent {
    @Input() text?: string
}
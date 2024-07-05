import { Component, Input } from '@angular/core'

@Component({
    selector: 'screen-grid-text',
    standalone: true,
    imports: [],
    template: `
        <div class="screen__text font-bold" > {{text}} </div>
    `,
})


export class ScreenGridTextComponent {
    @Input() text?: string
}
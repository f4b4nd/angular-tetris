import { Component, Input } from '@angular/core'

@Component({
    selector: 'directionnal-button',
    template: `
        <button class="border border-black h-4 w-4">
        </button>
    `,
})


export class DirectionnalButtonComponent {

    @Input() direction: string | undefined

}
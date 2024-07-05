import { Component, Input } from '@angular/core'

@Component({
    selector: 'screen-info-title',
    standalone: true,
    imports: [],
    template: `
        <div class="screen-info__title font-bold">  {{title}}  </div>
    `,
})


export class ScreenInfoTitleComponent {

    @Input() title?: string

}
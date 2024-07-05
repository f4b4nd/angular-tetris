import { Component, Input } from '@angular/core'

@Component({
    selector: 'screen-info-group',
    standalone: true,
    template: `
        <div class="screen-info__group flex flex-col items-center" >

            <ng-content></ng-content>

        </div>
    `,
})


export class ScreenInfoGroupComponent {

    @Input() classNames: string = ''

}
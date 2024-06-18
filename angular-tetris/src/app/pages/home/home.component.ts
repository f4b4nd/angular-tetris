import { Component, OnInit } from '@angular/core'


@Component({
    template: `
        <div class="h-full">
            <div class="flex justify-center h-full px-1 py-2">
                <game-console />
            </div>
        </div>
    `,
    host: {
        class: 'h-full',
    }
})

export class HomeComponent implements OnInit {

    ngOnInit() {}

}
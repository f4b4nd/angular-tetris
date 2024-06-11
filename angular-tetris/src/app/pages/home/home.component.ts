import { Component, OnInit } from '@angular/core'


@Component({
    template: `
        <div class="h-full">
            <div class="flex justify-center h-full py-2">
                <game-console></game-console>
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
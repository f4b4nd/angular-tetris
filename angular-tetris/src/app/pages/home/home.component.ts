import { Component, OnInit } from '@angular/core'


@Component({
    template: `
        <div>
            <top-navbar></top-navbar>
            <div class="flex justify-center">
                <game-console></game-console>
            </div>
        </div>
    `
})

export class HomeComponent implements OnInit {

    ngOnInit() {}

}
import { Component, OnInit } from '@angular/core'


@Component({
    template: `
        <div>
            <top-navbar></top-navbar>
            <div class="flex justify-center">
                <game-console></game-console>
            </div>
            <app-products></app-products>
            <test-fetch></test-fetch>
        </div>
    `
})

export class HomeComponent implements OnInit {

    ngOnInit() {}

}
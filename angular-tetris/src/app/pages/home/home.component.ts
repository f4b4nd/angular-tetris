import { Component, OnInit } from '@angular/core'


@Component({
    template: `
        <div>
            <top-navbar></top-navbar>
            <div class="flex justify-center">
                <gameboard-grid></gameboard-grid>
            </div>
        </div>
    `
})

export class HomeComponent implements OnInit {

    ngOnInit() {}

}
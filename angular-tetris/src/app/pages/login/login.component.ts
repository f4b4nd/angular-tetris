import { Component, OnInit } from '@angular/core'


@Component({
    template: `
        <top-navbar></top-navbar>

        <div class="flex">

            <login-form classNames="bg-white" />

        </div>


    `
})

export class LoginComponent implements OnInit {

    ngOnInit() {}

}
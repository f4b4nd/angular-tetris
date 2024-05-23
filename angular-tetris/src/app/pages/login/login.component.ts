import { Component, OnInit } from '@angular/core'


@Component({
    template: `
        <top-navbar></top-navbar>

        <div class="p-4">
            <login-form></login-form>
        </div>
    `
})

export class LoginComponent implements OnInit {

    ngOnInit() {}

}
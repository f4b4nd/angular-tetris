import { Component, OnInit } from '@angular/core'


@Component({
    template: `
        <div class="flex items-center h-full">

            <login-form 
                class="grow" 
                classNames="bg-white max-w-md mx-auto" 
            />

        </div>
    `
})

export class LoginComponent implements OnInit {

    ngOnInit() {}

}
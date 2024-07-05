import { Component, OnInit } from '@angular/core'
import { LoginFormComponent } from '../components/forms/login-form.component';


@Component({
    standalone: true,
    imports: [LoginFormComponent],
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
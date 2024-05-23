import { Component, Input } from '@angular/core'

import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'login-form',
    //        

    template: `
        <form [formGroup]="form" (ngSubmit)="onSubmit()">

            <div class="border border-black min-h-md max-w-md mx-auto">

                <div class="flex flex-col gap-4 p-4">

                    <div class="flex flex-col">

                        <label>Votre prénom :</label>

                        <input
                            type="text"
                            formControlName="firstname"               
                            
                            class="border-2 border-black"
                            name="firstname"
                            required
                        />

                    </div>

                    <div class="flex justify-end">

                        <button type="submit" class="border border-black rounded p-2" > 
                            Entrer 
                        </button>

                    </div>

                </div>

            </div>

        </form>

    `
})

    

export class LoginFormComponent {

    //@Input() firstname: string = "";


    form: FormGroup<{firstname: FormControl<string|null>}> = new FormGroup({
        firstname: new FormControl(''),
    })

    onSubmit() {
        const formData = this.form.value
        console.log('on submit prenom est:', formData)
    }
    /*
    setFirstname(event: KeyboardEvent) {
        const firstname = (event.target as HTMLInputElement).value
        console.log('prenom est: ', firstname)
        //this.firstname = firstname
    }*/
}
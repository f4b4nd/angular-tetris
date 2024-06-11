import { Component, Input, inject} from '@angular/core'

import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TetrisEngineService } from '../../tetris-engine.service';

@Component({
    selector: 'login-form',

    template: `
        <form [formGroup]="form" (ngSubmit)="onSubmit()">

            <div class="border border-black max-w-md mx-auto">

                <div class="flex flex-col gap-4 p-4">

                    <div class="flex flex-col">

                        <label>Your name :</label>

                        <input
                            type="text"
                            formControlName="playerName"               
                            
                            class="border-2 border-black"
                            name="playerName"
                            required
                        />

                    </div>

                    <div class="flex justify-end">

                        <button 
                            type="submit" 
                            [disabled]="!form.valid" 
                    
                            class="border border-black rounded p-2" 
                        > 
                            Play ! 
                        </button>

                    </div>

                </div>

            </div>

        </form>

    `
})

    

export class LoginFormComponent {

    #tetrisEngineService = inject(TetrisEngineService)

    form: FormGroup<{playerName: FormControl<string|null>}> = new FormGroup({
        playerName: new FormControl(''),
    })

    constructor(private router: Router) {}

    onSubmit() {

        const formData = this.form.value 

        if (!formData.playerName) return

        this.#tetrisEngineService.setPlayerName(formData.playerName)

        this.router.navigate([''])
    }

}
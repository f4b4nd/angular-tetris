import { Component, Input, inject} from '@angular/core'

import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router'
import { GameStateService } from '../../game-state.service'

@Component({
    selector: 'login-form',

    template: `
        <form [formGroup]="form" (ngSubmit)="onSubmit()" [ngClass]=[classNames]>

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

        </form>
    `
})

    

export class LoginFormComponent {

    @Input() classNames: string = ""

    #gameStateService = inject(GameStateService)
    
    form: FormGroup<{playerName: FormControl<string|null>}> = new FormGroup({
        playerName: new FormControl(''),
    })

    constructor(private router: Router) {}

    onSubmit() {

        const formData = this.form.value 

        if (!formData.playerName) return

        this.#gameStateService.setPlayerName(formData.playerName)

        this.router.navigate([''])
    }

}
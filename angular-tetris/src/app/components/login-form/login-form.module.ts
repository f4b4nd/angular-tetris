import { NgModule } from '@angular/core'

import { ReactiveFormsModule } from '@angular/forms'

import { LoginFormComponent } from './'

@NgModule({
    declarations: [
        LoginFormComponent,
    ],
    imports: [
        ReactiveFormsModule
    ],
    providers: [],
      
    exports: [
        LoginFormComponent,
    ]
    
})

export class LoginFormModule {}
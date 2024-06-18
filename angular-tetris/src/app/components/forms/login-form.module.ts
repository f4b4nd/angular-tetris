import { NgModule } from '@angular/core'

import { ReactiveFormsModule } from '@angular/forms'

import { LoginFormComponent } from './login-form.component'
import { CommonModule } from '@angular/common'

@NgModule({
    declarations: [
        LoginFormComponent,
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
    ],
    providers: [],
      
    exports: [
        LoginFormComponent,
    ]
    
})

export class LoginFormModule {}
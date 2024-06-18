import { NgModule } from '@angular/core'

import { LoginComponent } from './login.component'
import { LoginFormModule } from '../../components/forms/login-form.module'



@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        LoginFormModule,
    ],
    providers: [
    ],
    bootstrap: [
    ],
})

export class LoginModule {}
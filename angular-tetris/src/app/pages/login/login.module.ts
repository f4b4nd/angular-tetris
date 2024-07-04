import { NgModule } from '@angular/core'

import { LoginComponent } from './login.component'
import { LoginFormComponent } from '../../components/forms/login-form.component'



@NgModule({
    declarations: [
        LoginComponent,
    ],
    imports: [
        LoginFormComponent,
    ],
    providers: [
    ],
    bootstrap: [
    ],
})

export class LoginModule {}
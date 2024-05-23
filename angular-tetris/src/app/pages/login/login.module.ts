import { NgModule } from '@angular/core'

import { LoginComponent } from './'
import { TopNavbarModule, LoginFormComponent } from '../../components'
import { ReactiveFormsModule } from '@angular/forms'
import { LoginFormModule } from '../../components/login-form/login-form.module'



@NgModule({
    declarations: [
        LoginComponent,
      ],
      imports: [
        TopNavbarModule,
        LoginFormModule,
        ReactiveFormsModule,
      ],
      providers: [],
      
      bootstrap: [
      ],
    
})

export class LoginModule {}
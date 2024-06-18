import { NgModule } from '@angular/core'

import { LoginComponent } from './'
import { TopNavbarModule } from '../../components/top-navbar'
import { LoginFormModule } from '../../components/forms/login-form.module'
import { CommonModule } from '@angular/common'



@NgModule({
    declarations: [
        LoginComponent,
      ],
      imports: [
        TopNavbarModule,
        LoginFormModule,
      ],
      providers: [],
      
      bootstrap: [
      ],
    
})

export class LoginModule {}
import { NgModule } from '@angular/core'

import { LoginComponent } from './'
import { TopNavbarModule, LoginFormModule } from '../../components'



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
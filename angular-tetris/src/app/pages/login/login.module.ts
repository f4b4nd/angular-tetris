import { NgModule } from '@angular/core'

import { LoginComponent } from './'
import { TopNavbarModule, LoginFormComponent } from '../../components'



@NgModule({
    declarations: [
        LoginComponent,
        LoginFormComponent,
      ],
      imports: [
        TopNavbarModule,
      ],
      providers: [],
      
      bootstrap: [
      ],
    
})

export class LoginModule {}
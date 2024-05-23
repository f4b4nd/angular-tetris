import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { appRoutingModule } from '../../app.routes'

import { LoginComponent } from './'
import { TopNavbarModule } from '../../components'



@NgModule({
    declarations: [
        LoginComponent,
      ],
      imports: [
        TopNavbarModule,
      ],
      providers: [],
      
      bootstrap: [
      ],
    
})

export class LoginModule {}
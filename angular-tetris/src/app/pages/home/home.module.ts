import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { appRoutingModule } from '../../app.routes'

import { HomeComponent } from './'
import { TetriminoComponent, TopNavbarModule } from '../../components'



@NgModule({
    declarations: [
        HomeComponent,
        TetriminoComponent,
      ],
      imports: [
        TopNavbarModule,
      ],
      providers: [],
      
      bootstrap: [
      ],
    
})

export class HomeModule {}
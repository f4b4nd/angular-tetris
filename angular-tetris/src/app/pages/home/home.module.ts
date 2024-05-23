import { NgModule } from '@angular/core'

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
import { NgModule } from '@angular/core'

import { HomeComponent } from './'
import { TetriminoComponent, TopNavbarModule } from '../../components'
import { GameboardModule } from '../../components/gameboard/'



@NgModule({
    declarations: [
        HomeComponent,
        TetriminoComponent,
      ],
      imports: [
        TopNavbarModule,
        GameboardModule,
      ],
      providers: [],
      
})

export class HomeModule {}
import { NgModule } from '@angular/core'

import { HomeComponent } from './'
import { TetriminoComponent, TopNavbarModule } from '../../components'
import { GameConsoleModule } from '../../components'



@NgModule({
    declarations: [
        HomeComponent,
        TetriminoComponent,
    ],
    imports: [
        TopNavbarModule,
        GameConsoleModule,
    ],
    providers: [],
      
})

export class HomeModule {}
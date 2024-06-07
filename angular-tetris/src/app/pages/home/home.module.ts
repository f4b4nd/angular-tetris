import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeComponent } from './'
import { TetriminoComponent, TopNavbarModule } from '../../components'
import { GameConsoleModule } from '../../components'



@NgModule({
    declarations: [
        HomeComponent,
        TetriminoComponent,
    ],
    imports: [
        CommonModule,
        TopNavbarModule,
        GameConsoleModule,
    ],
    providers: [],
      
})

export class HomeModule {}
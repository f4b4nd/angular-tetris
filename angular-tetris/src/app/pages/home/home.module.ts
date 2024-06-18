import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeComponent } from './'
import { GameConsoleModule } from '../../components/game-console.module'


@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        GameConsoleModule,
    ],
    providers: [],
      
})

export class HomeModule {}
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeComponent } from '.'
import { GameConsoleComponent } from '../../components/game-console/game-console.component'


@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        GameConsoleComponent,
    ],
    providers: [],
      
})

export class HomeModule {}
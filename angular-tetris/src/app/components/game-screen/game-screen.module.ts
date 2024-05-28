import { NgModule } from '@angular/core'

import { GameboardInfoComponent } from '../gameboard-info/gameboard-info.component'
import { GameboardGridModule } from '../gameboard'
import { GameScreenComponent } from './game-screen.component'


@NgModule({
    declarations: [
        GameScreenComponent,
        GameboardInfoComponent,
    ],
    imports: [
        GameboardGridModule,
    ],
    providers: [

    ],
    exports: [
        GameScreenComponent,
        GameboardInfoComponent,
    ]
    
})

export class GameScreenModule {}
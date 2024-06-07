import { NgModule } from '@angular/core'

import { GameboardInfoComponent } from '../gameboard-info/gameboard-info.component'
import { GameboardGridModule } from '../gameboard'
import { GameScreenComponent } from './game-screen.component'
import { GameboardInfoBoxComponent } from '../gameboard-info/gameboard-info-box.component'
import { ToStringPipe } from '../../pipes/to-string.pipe'
import { CommonModule, DatePipe } from '@angular/common'

@NgModule({
    declarations: [
        ToStringPipe,
        GameScreenComponent,
        GameboardInfoComponent,
        GameboardInfoBoxComponent,
    ],
    imports: [
        GameboardGridModule,
        CommonModule,
    ],
    providers: [
        DatePipe,
    ],
    exports: [
        GameScreenComponent,
        GameboardInfoBoxComponent,
        GameboardInfoComponent,
    ]
    
})

export class GameScreenModule {}
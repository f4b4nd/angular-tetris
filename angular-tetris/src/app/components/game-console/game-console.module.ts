import { NgModule } from '@angular/core'
import { GameScreenModule } from '../game-screen/game-screen.module'
import { DirectionnalButtonComponent, DropButtonComponent, PauseButtonComponent, PowerSwitchButtonComponent } from '../buttons'
import { GameConsoleComponent } from './game-console.component'

import { CommonModule } from '@angular/common'
import { DirectionnalCrossComponent } from '../directionnal-cross.component'

@NgModule({
    declarations: [
        GameConsoleComponent,
        DirectionnalButtonComponent, 
        DropButtonComponent, 
        PauseButtonComponent,
        PowerSwitchButtonComponent,
    ],
    imports: [
        GameScreenModule,
        DirectionnalCrossComponent,
        CommonModule,
    ],
    providers: [
    ],
    exports: [
        GameConsoleComponent,
        DirectionnalButtonComponent, 
        DropButtonComponent, 
        PauseButtonComponent,
        PowerSwitchButtonComponent,
    ]
    
})

export class GameConsoleModule {}
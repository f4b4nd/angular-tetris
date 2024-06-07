import { NgModule } from '@angular/core'
import { GameScreenModule } from './game-screen/game-screen.module'
import { DirectionnalButtonComponent, DropButtonComponent, PauseButtonComponent, PowerSwitchButtonComponent } from './buttons'
import { GameConsoleComponent } from './game-console.component'

import { CommonModule } from '@angular/common'
import { ToStringPipe } from '../pipes/to-string.pipe'

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
import { NgModule } from '@angular/core'

import { GameScreenModule } from './game-screen/game-screen.module'
import { DirectionnalButtonComponent, DropButtonComponent, PauseButtonComponent, PowerSwitchButtonComponent } from './buttons'
import { GameConsoleComponent } from './game-console.component'

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
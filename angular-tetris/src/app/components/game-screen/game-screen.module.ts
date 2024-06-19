import { NgModule } from '@angular/core'

import { GameboardInfoComponent } from '../gameboard-info.component'
import { GridModule } from '../grid/grid.module'
import { GameScreenComponent } from './game-screen.component'
import { GameboardInfoSectionComponent } from '../gameboard-info-section.component'
import { ToStringPipe } from '../../pipes/to-string.pipe'
import { CommonModule } from '@angular/common'
import { NextTetriminoSectionComponent } from '../next-tetrimino-section.component'

@NgModule({
    declarations: [
        ToStringPipe,
        GameScreenComponent,
        GameboardInfoComponent,
        GameboardInfoSectionComponent,
        NextTetriminoSectionComponent,
    ],
    imports: [
        GridModule,
        CommonModule,
    ],
    providers: [
    ],
    exports: [
        GameScreenComponent,
        GameboardInfoSectionComponent,
        GameboardInfoComponent,
    ]
    
})

export class GameScreenModule {}
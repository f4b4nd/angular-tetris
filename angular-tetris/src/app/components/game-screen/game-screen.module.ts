import { NgModule } from '@angular/core'

import { GameboardInfoComponent } from '../gameboard-info/gameboard-info.component'
import { GridModule } from '../grid/grid.module'
import { GameScreenComponent } from './game-screen.component'
import { GameboardInfoSectionComponent } from '../gameboard-info/gameboard-info-section.component'
import { ToStringPipe } from '../../pipes/to-string.pipe'
import { CommonModule, DatePipe } from '@angular/common'
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
        DatePipe,
    ],
    exports: [
        GameScreenComponent,
        GameboardInfoSectionComponent,
        GameboardInfoComponent,
    ]
    
})

export class GameScreenModule {}
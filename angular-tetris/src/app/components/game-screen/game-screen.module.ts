import { NgModule } from '@angular/core'

import { GameboardInfoComponent } from '../gameboard-info.component'
import { GridModule } from '../grid/grid.module'
import { GameScreenComponent } from './game-screen.component'
import { GameboardInfoSectionComponent } from '../gameboard-info-section.component'
import { ToStringPipe } from '../../pipes/to-string.pipe'
import { CommonModule } from '@angular/common'
import { NextTetrominoSectionComponent } from '../next-tetromino-section.component'
import { ClockComponent } from '../clock.component'

@NgModule({
    declarations: [
        ToStringPipe,
        GameScreenComponent,
        GameboardInfoComponent,
        NextTetrominoSectionComponent,
    ],
    imports: [
        ClockComponent,
        GameboardInfoSectionComponent,
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
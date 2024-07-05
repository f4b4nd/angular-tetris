import { Component, inject } from '@angular/core'
import { NgIf, UpperCasePipe } from '@angular/common'
import { ToStringPipe } from '../../pipes/to-string.pipe'

import { GameService } from '../../state/game.service'

import { ClockComponent } from '../clock.component'
import { ScreenInfoTextComponent } from './screen.info.text.component'
import { ScreenInfoTitleComponent } from './screen.info.title.component'
import { ScreenInfoGroupComponent } from './screen.info.group.component'
import { GridComponent } from '../grid.component'

@Component({
    selector: 'screen-info',
    standalone: true,
    imports: [
        GridComponent, ClockComponent, 
        ScreenInfoGroupComponent, ScreenInfoTextComponent, ScreenInfoTitleComponent, 
        ToStringPipe, UpperCasePipe, NgIf,
    ],
    template: `
        <div class="screen_info__wrapper flex flex-col gap-8 h-full w-14">


            <screen-info-group *ngIf="gameService.displayedScore >= 0">
                <screen-info-title title="Score" />
                <screen-info-text [text]="gameService.displayedScore | tostring" />
            </screen-info-group>


            <screen-info-group>
                <screen-info-title title="Next" />
                <grid 
                    gridSize="grid-sm" 
                    tileSize="tile-sm" 
                    [grid]="gameService.nextTetromino?.baseShape || emptyTetrominoShape"
                />
            </screen-info-group>
            

            <div class="align-self-end mt-auto">

                <screen-info-group>
                    <screen-info-title [title]="(gameService.playerName | uppercase) || ''" />
                </screen-info-group>

 
                <clock 
                    class="font-bold"
                />
                
            </div>

            
        </div>
    `,
})


export class ScreenInfoComponent {

    gameService = inject(GameService)

    emptyTetrominoShape: Tetromino['shape'] = Array(2).fill(Array(4).fill(0))

}

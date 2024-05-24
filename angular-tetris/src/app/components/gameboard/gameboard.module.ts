import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';

import { GameboardGridComponent, GameboardCellComponent } from './'

@NgModule({
    declarations: [
        GameboardGridComponent,
        GameboardCellComponent,
    ],
    imports: [
        CommonModule
    ],
    providers: [],
      
    exports: [
        GameboardGridComponent,
        GameboardCellComponent,
    ]
    
})

export class GameboardModule {}
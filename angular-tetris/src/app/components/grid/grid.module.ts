import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { GridComponent } from './grid.component'
import { TileComponent } from '../tile.component'

@NgModule({
    declarations: [
        GridComponent,
        TileComponent,
    ],
    imports: [
        CommonModule,
    ],
    providers: [],
      
    exports: [
        GridComponent,
        TileComponent,
    ]
    
})

export class GridModule {}
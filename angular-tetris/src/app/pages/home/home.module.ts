import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeComponent } from './'
import { TetriminoComponent, TopNavbarModule } from '../../components'
import { GameConsoleModule } from '../../components'
import { TestFetchComponent } from '../../components/playground/test-fetch.component'
import ProductsRoute from '../../components/playground/test-product.component'



@NgModule({
    declarations: [
        HomeComponent,
        TetriminoComponent,
        TestFetchComponent,
        ProductsRoute,
    ],
    imports: [
        CommonModule,
        TopNavbarModule,
        GameConsoleModule,
    ],
    providers: [],
      
})

export class HomeModule {}
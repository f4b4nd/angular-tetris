import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { appRoutingModule } from '../../app.routes'

import { TopNavbarComponent } from './'



@NgModule({
    declarations: [
        TopNavbarComponent,
      ],
      imports: [
        BrowserModule,
        appRoutingModule,
      ],
      providers: [],
      
      exports: [
        TopNavbarComponent,
    ]
    
})

export class TopNavbarModule {}
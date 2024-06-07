import { ApplicationConfig } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { provideState, provideStore } from '@ngrx/store'

import { gameFeature } from './game.store'

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes), 
        provideStore(),
        provideState(gameFeature),
    ]
}

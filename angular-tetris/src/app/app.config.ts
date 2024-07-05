import { ApplicationConfig, LOCALE_ID } from '@angular/core'
import { provideRouter } from '@angular/router'
import fr from '@angular/common/locales/fr'

import { DatePipe, registerLocaleData } from '@angular/common'
import { provideState, provideStore } from '@ngrx/store'

import { routes } from './app.routes'
import { gameFeature } from './state/game.store'


registerLocaleData(fr)

export const appConfig: ApplicationConfig = {
    providers: [
        { 
            provide: LOCALE_ID,
            useValue: "fr_FR", 
        },
        provideRouter(routes), 
        provideStore(),
        provideState(gameFeature),
        DatePipe,
    ]
}

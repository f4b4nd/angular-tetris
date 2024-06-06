import { ApplicationConfig } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { provideState, provideStore } from '@ngrx/store'

import { provideHttpClient } from '@angular/common/http';
import { productsFeature } from './components/playground/test-product.store'
import { gridFeature } from './grid.store';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes), 
        provideStore(),
        provideHttpClient(),
        provideState(gridFeature),
        provideState(productsFeature),
    ]
}

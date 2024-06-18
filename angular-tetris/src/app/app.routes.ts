import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home'
import { LoginComponent } from './pages/login'
import { isAuthenticatedGuard } from './is-authenticated.guard';


export const routes: Routes = [ 
    { path: '', component: HomeComponent, canActivate: [isAuthenticatedGuard]},
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes)

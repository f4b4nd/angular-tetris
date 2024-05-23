import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home'
import { LoginComponent } from './pages/login'


export const routes: Routes = [ 
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes)

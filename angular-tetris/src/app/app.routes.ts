import { Routes, RouterModule } from '@angular/router'

import { AuthGuard } from './guard/auth.guard'


export const routes: Routes = [ 

    { 
        path: '', 
        loadComponent: () => import('./pages/home.component').then(module => module.HomeComponent),
        canActivate: [AuthGuard]
    },
    { 
        path: 'login',
        loadComponent: () => import('./pages/login.component').then(module => module.LoginComponent),
    },

    { 
        path: '**', 
        redirectTo: '' 
    },

]

export const appRoutingModule = RouterModule.forRoot(routes)

import { Routes, RouterModule } from '@angular/router'


export const routes: Routes = [ 

    { 
        path: '', 
        loadComponent: () => import('./pages/home.component').then(module => module.HomeComponent),
    },
    { 
        path: '**', 
        redirectTo: '' 
    },

]

export const appRoutingModule = RouterModule.forRoot(routes)

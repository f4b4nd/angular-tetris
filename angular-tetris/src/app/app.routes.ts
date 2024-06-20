import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home'
import { LoginComponent } from './pages/login'
import { AuthGuard } from './auth.guard';


export const routes: Routes = [ 

    { 
        path: '', 
        component: HomeComponent, 
        canActivate: [AuthGuard]
    },
    { 
        path: 'login',
        component: LoginComponent 
    },

    { 
        path: '**', 
        redirectTo: '' 
    },

]

export const appRoutingModule = RouterModule.forRoot(routes)

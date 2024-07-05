import { CanActivateFn, Router, UrlTree } from "@angular/router"
import { AuthService } from "../services/auth.service"
import { Signal, inject, effect } from "@angular/core"
import { Observable } from "rxjs"



export const AuthGuard: CanActivateFn = (route, state): Observable<boolean|UrlTree> | Promise<boolean|UrlTree> | boolean | UrlTree => {
    
    const router: Router = inject(Router)
    const isAuthenticated$$: Signal<boolean> = inject(AuthService).isAuthenticated()
   
    effect(() => {
        if (!isAuthenticated$$()) {
            setTimeout(() => {
                router.navigate(['/login'])
            }, 800)
        }
    })

    return isAuthenticated$$() ? true : router.createUrlTree(['/login'])
   
}

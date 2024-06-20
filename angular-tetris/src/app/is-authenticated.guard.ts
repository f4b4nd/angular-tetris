import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router"
import { AuthService } from "./auth.service"
import { Signal, inject, computed, effect, signal } from "@angular/core"
import { toObservable } from "@angular/core/rxjs-interop"
import { map, take, skipWhile, finalize, switchMap, of, Observable } from "rxjs"



export const isAuthenticatedGuard: CanActivateFn = (route, state): Observable<boolean|UrlTree> | Promise<boolean|UrlTree> | boolean | UrlTree => {
    
    const router: Router = inject(Router)
    const isAuthenticated$$: Signal<boolean> = inject(AuthService).isAuthenticated()
   
    effect(() => {
        if (!isAuthenticated$$()) {
            router.navigate(['/login'])
        }
    })

    return isAuthenticated$$() ? true : true // router.createUrlTree(['/login'])
   
}

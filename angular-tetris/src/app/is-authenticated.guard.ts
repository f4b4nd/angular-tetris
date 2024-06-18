import { CanActivateFn, Router } from "@angular/router"
import { AuthService } from "./auth.service"
import { inject } from "@angular/core"
import { GameStateService } from "./game-state.service"

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {
    
    const router: Router = inject(Router)
    const isAuthenticated: boolean = inject(AuthService).isAuthenticated()

    return isAuthenticated || router.navigate(['login'])

}
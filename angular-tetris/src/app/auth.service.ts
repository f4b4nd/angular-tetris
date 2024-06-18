import { Injectable, inject } from "@angular/core"
import { GameStateService } from "./game-state.service"

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    gameStateService = inject(GameStateService)

    isAuthenticated (): boolean {
        return this.gameStateService.playerName !== null
    }

}
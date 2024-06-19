import { Injectable, inject } from "@angular/core"
import { GameService } from "./game.service"

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    GameService = inject(GameService)

    isAuthenticated (): boolean {
        return this.GameService.playerName !== null
    }

}
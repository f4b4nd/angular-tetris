import { Injectable, Signal, computed, effect, inject } from "@angular/core"
import { GameService } from "./game.service"

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    gameService = inject(GameService)

    isAuthenticated (): Signal<boolean>  {
        return computed(() => this.gameService.playerName$$() !== null)
    }

}
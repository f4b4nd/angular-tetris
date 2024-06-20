import { Injectable, computed, effect, inject } from "@angular/core";
import { tetriminoModels } from "./tetrimino.model"
import { Store } from "@ngrx/store";
import { gameFeature, gameActions} from "./game.store";

@Injectable({
    providedIn: 'root'
})

export class GameService {

    store = inject(Store)

    private grid$$ = this.store.selectSignal(gameFeature.selectGrid)
    private currentTetrimino$$ = this.store.selectSignal(gameFeature.selectCurrentTetrimino)
    private nextTetrimino$$ = this.store.selectSignal(gameFeature.selectNextTetrimino)

    private isPaused$$ = this.store.selectSignal(gameFeature.selectIsPaused)
    private isGameOver$$ = this.store.selectSignal(gameFeature.selectIsGameOver)

    private score$$ = this.store.selectSignal(gameFeature.selectScore)
    public playerName$$ = this.store.selectSignal(gameFeature.selectPlayerName)
    private speed$$ = this.store.selectSignal(gameFeature.selectSpeed)
    
    private _interval?: number

    constructor() {
        effect(() => {
            if (!this.isPaused && !this.isGameOver) {
                this.gameRoutine()   
            }
            if (this.isPaused) {
                clearInterval(this._interval)
            }
        })
    }

    get grid () {
        return this.grid$$()
    }

    get speed () {
        return this.speed$$()
    }

    get currentTetrimino () {
        return this.currentTetrimino$$()
    }

    get isPaused () {  
        return this.isPaused$$()
    }

    get isGameOver () {
        return this.isGameOver$$()
    }

    get nextTetrimino () {
        return this.nextTetrimino$$()
    }

    get playerName () {
        return this.playerName$$()
    }

    get score () {
        return this.score$$()
    }

    logout () {
        this.setPlayerName(null)
    }

    setPlayerName (playerName: string|null) {
        this.store.dispatch(gameActions.setPlayerName({playerName}))
    }

    dropdownTetrimino () {
        while (this.currentTetrimino) {
            this.moveDownTetrimino()
        }
    }

    resetSpeed () {
        this.store.dispatch(gameActions.setSpeed({speed: 1}))
    }

    moveDownTetrimino () {
        this.store.dispatch(gameActions.moveDownTetrimino())
    }

    moveHorizontalTetrimino (direction: 'left' | 'right') {
        this.store.dispatch(gameActions.moveHorizontalTetrimino({direction}))
    }

    rotateTetrimino () {
        this.store.dispatch(gameActions.rotateTetrimino())
    }

    resetGame () {
        this.store.dispatch(gameActions.resetGame())
    }

    spawnTetrimino () {
        this.store.dispatch(gameActions.setRandomNextTetrimino())
        this.store.dispatch(gameActions.setCurrentTetrimino())
        this.store.dispatch(gameActions.setRandomNextTetrimino())
    }

    toggleIsPaused () {
        this.store.dispatch(gameActions.setIsPaused({isPaused: !this.isPaused}))
    }

    gameRoutine () {

        const defaultSpeed = 800
        const maxSpeed = 1 / 1000
        const speedInterval = this.speed > 1 ? maxSpeed : defaultSpeed

        clearInterval(this._interval)

        this._interval = setInterval(() => {

            if (!this.currentTetrimino) {
                this.resetSpeed()
                this.spawnTetrimino()
            }

            this.moveDownTetrimino()

        }, speedInterval)

    }

    startGame () {

        this.store.dispatch(gameActions.resetGame())
        this.store.dispatch(gameActions.setIsPaused({isPaused: false}))
        this.store.dispatch(gameActions.setIsGameOver({isGameOver: false}))

        this.gameRoutine()

    }

}

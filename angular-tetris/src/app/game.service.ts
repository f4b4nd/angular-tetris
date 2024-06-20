import { Injectable, computed, effect, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { gameFeature, gameActions} from "./game.store";

@Injectable({
    providedIn: 'root'
})

export class GameService {

    store = inject(Store)

    private grid$$ = this.store.selectSignal(gameFeature.selectGrid)
    private currentTetromino$$ = this.store.selectSignal(gameFeature.selectCurrentTetromino)
    private nextTetromino$$ = this.store.selectSignal(gameFeature.selectNextTetromino)

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

    get currentTetromino () {
        return this.currentTetromino$$()
    }

    get isPaused () {  
        return this.isPaused$$()
    }

    get isGameOver () {
        return this.isGameOver$$()
    }

    get nextTetromino () {
        return this.nextTetromino$$()
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

    dropdownTetromino () {
        while (this.currentTetromino) {
            this.moveDownTetromino()
        }
    }

    resetSpeed () {
        this.store.dispatch(gameActions.setSpeed({speed: 1}))
    }

    moveDownTetromino () {
        this.store.dispatch(gameActions.moveDownTetromino())
    }

    moveHorizontalTetromino (direction: 'left' | 'right') {
        this.store.dispatch(gameActions.moveHorizontalTetromino({direction}))
    }

    rotateTetromino () {
        this.store.dispatch(gameActions.rotateTetromino())
    }

    resetGame () {
        this.store.dispatch(gameActions.resetGame())
    }

    spawnTetromino () {
        this.store.dispatch(gameActions.setRandomNextTetromino())
        this.store.dispatch(gameActions.setCurrentTetromino())
        this.store.dispatch(gameActions.setRandomNextTetromino())
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

            if (!this.currentTetromino) {
                this.resetSpeed()
                this.spawnTetromino()
            }

            this.moveDownTetromino()

        }, speedInterval)

    }

    startGame () {

        this.store.dispatch(gameActions.resetGame())
        this.store.dispatch(gameActions.setIsPaused({isPaused: false}))
        this.store.dispatch(gameActions.setIsGameOver({isGameOver: false}))

        this.gameRoutine()

    }

}

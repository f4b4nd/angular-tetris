import { Injectable, computed, effect, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { gameFeature, gameActions} from "./game.store";
import { getNumberOfFullRows } from "./utils/matrix-utils";
import { asapScheduler } from 'rxjs';

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
    
    private _interval?: number

    constructor() {
        effect(() => {
            if (!this.isPaused && !this.isGameOver) {
                this.gameRoutine()
                this.watchGrid()
            }
        })
    }

    get grid () {
        return this.grid$$()
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

    get displayedScore () {
        return this.score * 100
    }
    
    watchGrid () {
        const hasFullRows = getNumberOfFullRows(this.grid) > 0
        if (hasFullRows) {
            this.cleanGridFullRows()
            this.raiseScore()
        }
    }

    cleanGridFullRows() {
        // wrap in a scheduler to avoid NG0600
        asapScheduler.schedule(() => this.store.dispatch(gameActions.cleanGridFullRows()))
    }


    logout () {
        this.setPlayerName(null)
    }

    raiseScore () {
        // wrap in a scheduler to avoid NG0600
        asapScheduler.schedule(() => this.store.dispatch(gameActions.raiseScore()))
    }

    setPlayerName (playerName: string|null) {
        this.store.dispatch(gameActions.setPlayerName({playerName}))
    }

    dropdownTetromino () {
        while (this.currentTetromino) {
            this.moveDownTetromino()
        }
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
        if (this.isPaused) {
            clearInterval(this._interval)
        }
    }

    gameRoutine () {

        const defaultIntervalSpeed = 800

        clearInterval(this._interval)

        this._interval = setInterval(() => {

            !this.currentTetromino && this.spawnTetromino();

            this.moveDownTetromino();

        }, defaultIntervalSpeed)

    }

    startGame () {

        this.store.dispatch(gameActions.resetGame())
        this.store.dispatch(gameActions.setIsPaused({isPaused: false}))
        this.store.dispatch(gameActions.setIsGameOver({isGameOver: false}))

        this.gameRoutine()

    }

}

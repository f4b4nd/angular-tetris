import { Injectable, computed, effect, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { gameFeature, gameActions} from "./game.store";
import { getNumberOfFullRows, isVerticalFull } from "./utils/matrix-utils";
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
    
    private isLocked$$ = computed(() => this.isPaused$$() === true || this.isGameOver$$() === true)

    private _interval?: number
    
    constructor() {
        effect(() => {
            if (!this.isLocked) {
                this.gameRoutine()
                this.watchGrid()
            }
            else {
                clearInterval(this._interval)
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

    get isLocked () {
        return this.isLocked$$()
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

        const hasReachedBottom = this.currentTetromino === null

        const fullRowsCounter = getNumberOfFullRows(this.grid)

        if (hasReachedBottom && fullRowsCounter > 0) {
            this.cleanGridFullRows()
            this.raiseScore(fullRowsCounter)
        }

    }

    cleanGridFullRows() {
        // wrap in a scheduler to avoid NG0600
        asapScheduler.schedule(() => this.store.dispatch(gameActions.cleanGridFullRows()))
    }


    logout () {
        this.setPlayerName(null)
    }

    raiseScore (lines: number) {
        // wrap in a scheduler to avoid NG0600
        asapScheduler.schedule(() => this.store.dispatch(gameActions.raiseScore({lines})))
    }

    setPlayerName (playerName: string|null) {
        this.store.dispatch(gameActions.setPlayerName({playerName}))
    }

    dropdownTetromino () {
        while (!this.isLocked && this.currentTetromino) {
            this.moveDownTetromino()
        }
    }

    moveDownTetromino () {
        if (!this.isLocked) {
            this.store.dispatch(gameActions.moveDownTetromino())
        }
    }

    moveHorizontalTetromino (direction: 'left' | 'right') {
        if (!this.isLocked) {
            this.store.dispatch(gameActions.moveHorizontalTetromino({direction}))
        }
    }

    rotateTetromino () {
        if (!this.isLocked) {
            this.store.dispatch(gameActions.rotateTetromino())
        }
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
        this.store.dispatch(gameActions.setIsPaused({isPaused: !this.isPaused}));
        this.isPaused && clearInterval(this._interval);
    }

    gameRoutine () {

        const defaultIntervalSpeed = 800

        clearInterval(this._interval)

        this._interval = setInterval(() => {

            this.moveDownTetromino();

            !this.currentTetromino && this.spawnTetromino();

        }, defaultIntervalSpeed)

    }

    onGameOver () {
        this.resetGame()
        this.store.dispatch(gameActions.setIsPaused({isPaused: true}))
        this.store.dispatch(gameActions.setIsGameOver({isGameOver: true}))
    }

    startGame () {

        this.store.dispatch(gameActions.resetGame())
        this.store.dispatch(gameActions.setIsPaused({isPaused: false}))
        this.store.dispatch(gameActions.setIsGameOver({isGameOver: false}))

        this.gameRoutine()

    }

}

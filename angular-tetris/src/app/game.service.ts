import { Injectable, computed, effect, inject } from "@angular/core";
import { tetriminoModels } from "./tetrimino.model"
import { Store } from "@ngrx/store";
import { gameFeature, gameActions} from "./game.store";

@Injectable({
    providedIn: 'root'
})

export class GameService {

    store = inject(Store)

    private _grid = this.store.selectSignal(gameFeature.selectGrid)
    private _currentTetrimino = this.store.selectSignal(gameFeature.selectCurrentTetrimino)
    private _nextTetrimino = this.store.selectSignal(gameFeature.selectNextTetrimino)

    private _isPaused = this.store.selectSignal(gameFeature.selectIsPaused)
    private _isGameOver = this.store.selectSignal(gameFeature.selectIsGameOver)

    private _score = this.store.selectSignal(gameFeature.selectScore)
    private _playerName = this.store.selectSignal(gameFeature.selectPlayerName)
    private _speed = this.store.selectSignal(gameFeature.selectSpeed)
    
    private _interval?: number

    constructor() {
        effect(() => {
            if (!this.isPaused && !this.isGameOver) {
                console.log('hi')
                this.gameRoutine()   
            }
            if (this.isPaused) {
                clearInterval(this._interval)
            }
        })
    }

    get grid () {
        return this._grid()
    }

    get speed () {
        return this._speed()
    }

    get currentTetrimino () {
        return this._currentTetrimino()
    }

    get isPaused () {  
        return this._isPaused()
    }

    get isGameOver () {
        return this._isGameOver()
    }

    get nextTetrimino () {
        return this._nextTetrimino()
    }

    get playerName () {
        return this._playerName()
    }

    get score () {
        return this._score()
    }


    setPlayerName (playerName: string) {
        this.store.dispatch(gameActions.setPlayerName({playerName}))
    }

    set score (score: number) {
        this.store.dispatch(gameActions.setScore({score}))
    }

    dropdownTetrimino () {
        this.store.dispatch(gameActions.setSpeed({speed: 100}))
        //this.store.dispatch(gameActions.setSpeed({speed: 1}))
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

        const isValidSpeed = this.speed >= 1 && this.speed <= 100
        const speedInterval = isValidSpeed ? (1000 / this.speed) : 1000

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

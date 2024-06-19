import { Injectable, computed, effect, inject } from "@angular/core";
import { tetriminoModels } from "./tetrimino.model";
import { toObservable } from '@angular/core/rxjs-interop';
import { interval, BehaviorSubject } from "rxjs";
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
    private _score = this.store.selectSignal(gameFeature.selectScore)
    private _playerName = this.store.selectSignal(gameFeature.selectPlayerName)
    private _speed = this.store.selectSignal(gameFeature.selectSpeed)
    
    constructor() {
        /*effect(() => {
            if (!this.currentTetrimino && !this.isPaused) {
                console.log(`effect`)
                //this.runGame()
            }
            /*
            if (this.currentTetrimino) {
                while (this.currentTetrimino) {
                    this.dropdownTetrimino()
                }
            }
            
        })*/
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
        this.store.dispatch(gameActions.setSpeed({speed: 10}))
        //this.store.dispatch(gameActions.setSpeed({speed: 1}))
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


    startGame () {

        this.store.dispatch(gameActions.resetGame())
        this.store.dispatch(gameActions.setIsPaused({isPaused: false}))

        const speedInterval = this._speed() >= 1 ? 1000 / this._speed() : 1000

        this.spawnTetrimino()

        setInterval(() => {
            if (!this.isPaused) {
                this.moveDownTetrimino()
            }
        }, 100)

    }

}
import { Injectable, computed, inject } from "@angular/core";
import { isBottomCollision, isLeftCollision, isRightCollision } from "./utils/collisions"
import { canOperateMatrixes, operateMatrixes } from "./utils/operateMatrixes";
import { containsValueGreaterThanOne, getMatrixDeleteFullRows, getNumberOfFullRows } from "./utils/matrix-utils";
import { tetriminoModels } from "./tetrimino.model";
import { toObservable } from '@angular/core/rxjs-interop';
import { BehaviorSubject } from "rxjs";
import { Store } from "@ngrx/store";
import { gameFeature, gameActions} from "./game.store";
import { getRotatedMatrix } from "./utils/rotateMatrix";

@Injectable({
    providedIn: 'root'
})

export class TetrisEngineService {

    store = inject(Store)

    _grid = this.store.selectSignal(gameFeature.selectGrid)
    _currentTetrimino = this.store.selectSignal(gameFeature.selectCurrentTetrimino)
    _nextTetrimino = this.store.selectSignal(gameFeature.selectNextTetrimino)

    _score = this.store.selectSignal(gameFeature.selectScore)
    _playerName = this.store.selectSignal(gameFeature.selectPlayerName)

    get grid () {
        return this._grid()
    }

    get currentTetrimino () {
        return this._currentTetrimino()
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


    setCurrentTetrimino (tetrimino: Tetrimino | null) {
        this.store.dispatch(gameActions.setCurrentTetrimino({tetrimino}))
    }


    setPlayerName (playerName: string) {
        this.store.dispatch(gameActions.setPlayerName({playerName}))
    }

    setScore (score: number) {
        this.store.dispatch(gameActions.setScore({score}))
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
        const randomIdx = Math.floor(Math.random() * tetriminoModels.length)
        const randomTetrimino = tetriminoModels[randomIdx]
        this.store.dispatch(gameActions.spawnTetrimino({tetrimino: randomTetrimino}))
    }

}
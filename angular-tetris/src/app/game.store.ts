import { Store, createFeature, createReducer, createActionGroup, props, emptyProps, on } from "@ngrx/store"
import { inject } from '@angular/core'
import { toObservable } from '@angular/core/rxjs-interop';
import { tetriminoModels } from "./tetrimino.model"
import { getMatrixApplyGravity, getMatrixDeleteFullRows, getNumberOfFullRows, containsValueGreaterThanOne} from "./utils/matrix-utils"
import { operateMatrixes, canOperateMatrixes } from "./utils/operateMatrixes"
import { getRotatedMatrix } from "./utils/rotateMatrix"
import { isBottomCollision, isLeftCollision, isRightCollision, onTryMoveTetrimino, onTryRotateTetrimino } from "./utils/collisions"
import { GRID_SIZE, GRID_WIDTH } from "./utils/constants"


export const initialGameState: GameState = {
    isGameOver: true,
    isPaused: true,
    score: 0,
    speed: 1,
    playerName: null,

    grid: Array(GRID_SIZE).fill(Array(GRID_WIDTH).fill(0)),
    currentTetrimino: null,
    nextTetrimino: null,
}


export const gameActions = createActionGroup({
    source: 'Game',
    events: {
        resetGame: emptyProps(),
        spawnTetrimino: emptyProps(),
        setRandomNextTetrimino: emptyProps(),
        moveHorizontalTetrimino: props<{ direction: 'left' | 'right' }>(),
        moveDownTetrimino: emptyProps(),
        rotateTetrimino:  emptyProps(),
        setPlayerName: props<{ playerName: string|null }>(),
        setGrid: props<{grid: Matrix}>(),
        setScore: props<{score: number}>(),
        setCurrentTetrimino: emptyProps(),
        setIsPaused: props<{isPaused: boolean}>(),
        setIsGameOver: props<{isGameOver: boolean}>(),
        setSpeed: props<{speed: 1 | 2}>(),
    }
})


export const gameFeature = createFeature({
    name: 'game',
    reducer: createReducer(

        initialGameState,

        on(gameActions.resetGame, (state) => {
            return {
                ...initialGameState,
                playerName: state.playerName, 
            }
        }),

        on(gameActions.setSpeed, (state, action) => {
            return {
                ...state,
                speed: action.speed,
            }
        }),

        on(gameActions.setIsPaused, (state, action) => {
            return {
                ...state,
                isPaused: action.isPaused,
            }
        }),

        on(gameActions.setIsGameOver, (state, action) => {
            return {
                ...state,
                isGameOver: action.isGameOver,
            }
        }),

        on(gameActions.setRandomNextTetrimino, (state) => {

            if (state.nextTetrimino) return state

            const randomIdx = Math.floor(Math.random() * tetriminoModels.length)
            const randomTetrimino = tetriminoModels[randomIdx]

            return {
                ...state,
                nextTetrimino: randomTetrimino,
            }
        }),

        on(gameActions.setCurrentTetrimino, (state) => {

            if (!state.grid || state.currentTetrimino || !state.nextTetrimino) return state

            const newGrid = operateMatrixes(state.grid, state.nextTetrimino.shape, state.nextTetrimino.coordinates, '+')

            return {
                ...state,
                grid: newGrid,
                currentTetrimino: state.nextTetrimino,
                nextTetrimino: null,
            }

        }),

        on(gameActions.moveHorizontalTetrimino, (state, action) => {
            
            if (!state.grid || !state.currentTetrimino) return state
            
            const Xoffset = action.direction === 'right' ? 1 : -1
            const offsetCoordinates = {Xoffset, Yoffset: 0}

            if (action.direction === 'left' && isLeftCollision(state.grid, state.currentTetrimino.shape, state.currentTetrimino.coordinates)) {
                return state
            }
    
            if (action.direction === 'right' && isRightCollision(state.grid, state.currentTetrimino.shape, state.currentTetrimino.coordinates)) {
                return state
            }
    
            const onTryMoveT = onTryMoveTetrimino(state.grid, state.currentTetrimino, offsetCoordinates)
            
            if (onTryMoveT.hasCellsCollisions) {
                return {
                    ...state,
                    currentTetrimino: null,
                }
            }

            return {
                ...state,
                grid: onTryMoveT.gridResult,
                currentTetrimino: onTryMoveT.tetriminoResult,
            }
        }),

        on(gameActions.moveDownTetrimino, (state) => {
            
            if (!state.grid || !state.currentTetrimino) return state

            const offsetCoordinates = {Xoffset: 0, Yoffset: 1}

            const hasFullRows = getNumberOfFullRows(state.grid) > 0

            if (hasFullRows) {
                const grid = getMatrixDeleteFullRows(state.grid)

                const score = state.score + 100 * getNumberOfFullRows(state.grid)

                return {
                    ...state,
                    grid,
                    score,
                    currentTetrimino: null,
                }
            }

            if (isBottomCollision(state.grid, state.currentTetrimino.shape, state.currentTetrimino.coordinates)) {
                return {
                    ...state,
                    currentTetrimino: null,
                }
            }
    
            const onTryMoveT = onTryMoveTetrimino(state.grid, state.currentTetrimino, offsetCoordinates)
            if (onTryMoveT.hasCellsCollisions) {
                return {
                    ...state,
                    currentTetrimino: null,
                }
            }

            return {
                ...state,
                grid: onTryMoveT.gridResult,
                currentTetrimino: onTryMoveT.tetriminoResult,
            }
 
        }),

        on(gameActions.rotateTetrimino, (state) => {
            
            if (!state.grid || !state.currentTetrimino) return state
            
            const rotatedShape = getRotatedMatrix(state.currentTetrimino.shape, '-90deg')

            const onTryRotateT = onTryRotateTetrimino(state.grid, state.currentTetrimino, rotatedShape)
            
            if (!onTryRotateT.allowOperate) {
                return state
            }

            return {
                ...state,
                grid: onTryRotateT.gridResult,
                currentTetrimino: onTryRotateT.tetriminoResult,
            }

        }),

        on(gameActions.setPlayerName, (state, action) => {

            return {
                ...state,
                playerName: action.playerName,
            }

        })

    ),

})
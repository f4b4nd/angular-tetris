import { Store, createFeature, createReducer, createActionGroup, props, emptyProps, on } from "@ngrx/store"
import { inject } from '@angular/core'
import { toObservable } from '@angular/core/rxjs-interop';
import { tetrominoModels } from "./tetromino.model"
import { getMatrixApplyGravity, getMatrixDeleteFullRows, getNumberOfFullRows, containsValueGreaterThanOne} from "./utils/matrix-utils"
import { operateMatrixes, canOperateMatrixes } from "./utils/operateMatrixes"
import { getRotatedMatrix } from "./utils/rotateMatrix"
import { isBottomCollision, isLeftCollision, isRightCollision, onTryMoveTetromino, onTryRotateTetromino } from "./utils/collisions"
import { GRID_SIZE, GRID_WIDTH } from "./utils/constants"


export const initialGameState: GameState = {
    isGameOver: true,
    isPaused: true,
    score: 0,
    speed: 1,
    playerName: null,

    grid: Array(GRID_SIZE).fill(Array(GRID_WIDTH).fill(0)),
    currentTetromino: null,
    nextTetromino: null,
}


export const gameActions = createActionGroup({
    source: 'Game',
    events: {
        resetGame: emptyProps(),
        spawnTetromino: emptyProps(),
        setRandomNextTetromino: emptyProps(),
        moveHorizontalTetromino: props<{ direction: 'left' | 'right' }>(),
        moveDownTetromino: emptyProps(),
        rotateTetromino:  emptyProps(),
        setPlayerName: props<{ playerName: string|null }>(),
        setGrid: props<{grid: Matrix}>(),
        setScore: props<{score: number}>(),
        setCurrentTetromino: emptyProps(),
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

        on(gameActions.setRandomNextTetromino, (state) => {

            if (state.nextTetromino) return state

            const randomIdx = Math.floor(Math.random() * tetrominoModels.length)
            const randomTetromino = tetrominoModels[randomIdx]

            return {
                ...state,
                nextTetromino: randomTetromino,
            }
        }),

        on(gameActions.setCurrentTetromino, (state) => {

            if (!state.grid || state.currentTetromino || !state.nextTetromino) return state

            const newGrid = operateMatrixes(state.grid, state.nextTetromino.shape, state.nextTetromino.coordinates, '+')

            return {
                ...state,
                grid: newGrid,
                currentTetromino: state.nextTetromino,
                nextTetromino: null,
            }

        }),

        on(gameActions.moveHorizontalTetromino, (state, action) => {
            
            if (!state.grid || !state.currentTetromino) return state
            
            const Xoffset = action.direction === 'right' ? 1 : -1
            const offsetCoordinates = {Xoffset, Yoffset: 0}

            if (action.direction === 'left' && isLeftCollision(state.grid, state.currentTetromino.shape, state.currentTetromino.coordinates)) {
                return state
            }
    
            if (action.direction === 'right' && isRightCollision(state.grid, state.currentTetromino.shape, state.currentTetromino.coordinates)) {
                return state
            }
    
            const onTryMoveT = onTryMoveTetromino(state.grid, state.currentTetromino, offsetCoordinates)
            
            if (onTryMoveT.hasCellsCollisions) {
                return {
                    ...state,
                    currentTetromino: null,
                }
            }

            return {
                ...state,
                grid: onTryMoveT.gridResult,
                currentTetromino: onTryMoveT.tetrominoResult,
            }
        }),

        on(gameActions.moveDownTetromino, (state) => {
            
            if (!state.grid || !state.currentTetromino) return state

            const offsetCoordinates = {Xoffset: 0, Yoffset: 1}

            const hasFullRows = getNumberOfFullRows(state.grid) > 0

            if (hasFullRows) {
                const grid = getMatrixDeleteFullRows(state.grid)

                const score = state.score + 100 * getNumberOfFullRows(state.grid)

                return {
                    ...state,
                    grid,
                    score,
                    currentTetromino: null,
                }
            }

            if (isBottomCollision(state.grid, state.currentTetromino.shape, state.currentTetromino.coordinates)) {
                return {
                    ...state,
                    currentTetromino: null,
                }
            }
    
            const onTryMoveT = onTryMoveTetromino(state.grid, state.currentTetromino, offsetCoordinates)
            if (onTryMoveT.hasCellsCollisions) {
                return {
                    ...state,
                    currentTetromino: null,
                }
            }

            return {
                ...state,
                grid: onTryMoveT.gridResult,
                currentTetromino: onTryMoveT.tetrominoResult,
            }
 
        }),

        on(gameActions.rotateTetromino, (state) => {
            
            if (!state.grid || !state.currentTetromino) return state
            
            const rotatedShape = getRotatedMatrix(state.currentTetromino.shape, '-90deg')

            const onTryRotateT = onTryRotateTetromino(state.grid, state.currentTetromino, rotatedShape)
            
            if (!onTryRotateT.allowOperate) {
                return state
            }

            return {
                ...state,
                grid: onTryRotateT.gridResult,
                currentTetromino: onTryRotateT.tetrominoResult,
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
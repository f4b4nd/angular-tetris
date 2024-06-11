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
    isGameOver: false,
    isPaused: false,
    score: 0,
    playerName: null,

    grid: null,
    currentTetrimino: null,
    nextTetrimino: null,
}


export const gameActions = createActionGroup({
    source: 'Game',
    events: {

        resetGame: emptyProps(),
        spawnTetrimino: props<{tetrimino: Tetrimino}>(),
        setNextTetrimino: emptyProps(),
        moveHorizontalTetrimino: props<{ direction: 'left' | 'right' }>(),
        moveDownTetrimino: emptyProps(),
        rotateTetrimino:  emptyProps(),
        setPlayerName: props<{ playerName: string }>(),
        setGrid: props<{grid: Matrix}>(),
        setScore: props<{score: number}>(),
        setCurrentTetrimino: props<{tetrimino: Tetrimino | null}>(),
    }
})


export const gameFeature = createFeature({
    name: 'game',
    reducer: createReducer(

        initialGameState,

        on(gameActions.resetGame, (state) => {
            return {
                ...initialGameState,
                grid: Array(GRID_SIZE).fill(Array(GRID_WIDTH).fill(0))
            }
        }),


        on(gameActions.setNextTetrimino, (state) => {

            if (!state.grid || state.currentTetrimino) return state

            const randomIdx = Math.floor(Math.random() * tetriminoModels.length)
            const randomTetrimino = tetriminoModels[randomIdx]

            return {
                ...state,
                nextTetrimino: randomTetrimino,
            }
        }),

        on(gameActions.spawnTetrimino, (state, action) => {

            if (!state.grid || state.currentTetrimino ) return state //|| !state.nextTetrimino) return state

            const newGrid = operateMatrixes(state.grid, action.tetrimino.shape, action.tetrimino.coordinates, '+')

            return {
                ...state,
                grid: newGrid,
                currentTetrimino: action.tetrimino,
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

/*
export function injectGameFeature() {

    const store = inject(Store)
  
    
    return {
        grid: store.selectSignal(gameFeature.selectGrid),
        //grid$: toObservable(store.selectSignal(gameFeature.selectGrid)),
        currentTetrimino: store.selectSignal(gameFeature.selectCurrentTetrimino),
        nextTetrimino: store.selectSignal(gameFeature.selectNextTetrimino),

        score: store.selectSignal(gameFeature.selectScore),
        playerName: store.selectSignal(gameFeature.selectPlayerName),

        resetGame: () => store.dispatch(gameActions.resetGame()),
        setPlayerName: (playerName: string) => store.dispatch(gameActions.setPlayerName({playerName})),

        spawnTetrimino: (tetrimino: Tetrimino) => store.dispatch(gameActions.spawnTetrimino({tetrimino})),
        moveDownTetrimino: () => store.dispatch(gameActions.moveDownTetrimino()),
        //moveLeftTetrimino: () => store.dispatch(gameActions.moveHorizontalTetrimino({Xoffset: -1})),
        //moveRightTetrimino: () => store.dispatch(gameActions.moveHorizontalTetrimino({Xoffset: 1})),
        moveHorizontalTetrimino: (Xoffset : 1 | -1) => store.dispatch(gameActions.moveHorizontalTetrimino({Xoffset})),
        rotateTetrimino: () => store.dispatch(gameActions.rotateTetrimino()),
        setGrid: (grid: Matrix) => store.dispatch(gameActions.setGrid({grid})),

    }
}*/

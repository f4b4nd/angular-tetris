import { Store, createFeature, createReducer, createActionGroup, props, emptyProps, on } from "@ngrx/store"
import { inject } from '@angular/core'

import { tetriminoModels } from "./tetrimino.model"
import { getMatrixApplyGravity, getMatrixDeleteFullRows, getNumberOfFullRows, containsValueGreaterThanOne} from "./utils/matrix-utils"
import { operateMatrixes, canOperateMatrixes } from "./utils/operateMatrixes"
import { getRotatedMatrix } from "./utils/rotateMatrix"
import { isBottomCollision, isLeftCollision, isRightCollision } from "./utils/collisions"
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
        spawnTetrimino: emptyProps(),
        moveHorizontalTetrimino: props<{ Xoffset: 1 | -1 }>(),
        moveDownTetrimino: emptyProps(),
        rotateTetrimino:  emptyProps(),
        setPlayerName: props<{ playerName: string }>(),
    }
})


export const gameFeature = createFeature({
    name: 'game',
    reducer: createReducer(

        initialGameState,

        on(gameActions.resetGame, (state) => {
            return {
                ...state,
                initialGameState,
                grid: Array(GRID_SIZE).fill(Array(GRID_WIDTH).fill(0))
            }
        }),


        on(gameActions.spawnTetrimino, (state) => {

            if (!state.grid || state.currentTetrimino) return state

            const randomIdx = Math.floor(Math.random() * tetriminoModels.length)
            const randomTetrimino = tetriminoModels[randomIdx]

            return {
                ...state,
                grid: operateMatrixes(state.grid, randomTetrimino.shape, randomTetrimino.coordinates, '+'),
                currentTetrimino: randomTetrimino,
            }
        }),

        on(gameActions.moveHorizontalTetrimino, (state, action) => {
            
            if (!state.grid || !state.currentTetrimino) return state
            
            if (action.Xoffset === -1 && isLeftCollision(state.grid, state.currentTetrimino.shape, state.currentTetrimino.coordinates)) {
                return state
            }

            if (action.Xoffset === 1 && isRightCollision(state.grid, state.currentTetrimino.shape, state.currentTetrimino.coordinates)) {
                return state
            }

            const currentTetriminoCoordinates = {
                x: state.currentTetrimino.coordinates.x + action.Xoffset, 
                y: state.currentTetrimino.coordinates.y, 
            }

            const gridWithoutTetrimino = operateMatrixes(state.grid, state.currentTetrimino.shape, state.currentTetrimino.coordinates, '-')
            const grid = operateMatrixes(gridWithoutTetrimino, state.currentTetrimino.shape, currentTetriminoCoordinates, '+')
            
            const hasCellsCollisions = containsValueGreaterThanOne(grid)

            if (hasCellsCollisions) {
                return state
            }

            return {
                ...state,
                grid,
                currentTetrimino: {
                    ...state.currentTetrimino, 
                    coordinates: currentTetriminoCoordinates,
                },
            }
        }),

        on(gameActions.moveDownTetrimino, (state) => {
            
            if (!state.grid || !state.currentTetrimino) return state
            
            const hasFullRows = getNumberOfFullRows(state.grid) > 0

            if (hasFullRows) {
                
                //let gridCleaned = getMatrixApplyGravity(state.grid) 
                let gridCleaned = getMatrixDeleteFullRows(state.grid)

                const score = state.score + 100 * getNumberOfFullRows(state.grid)

                return {
                    ...state,
                    score: score,
                    grid: gridCleaned,
                    currentTetrimino: null,
                }
            }


            if (isBottomCollision(state.grid, state.currentTetrimino.shape, state.currentTetrimino.coordinates)) {
                return {
                    ...state,
                    currentTetrimino: null,
                }
            }

            const currentTetriminoCoordinates = {
                x: state.currentTetrimino.coordinates.x, 
                y: state.currentTetrimino.coordinates.y + 1, 
            }

            const gridWithoutTetrimino = operateMatrixes(state.grid, state.currentTetrimino.shape, state.currentTetrimino.coordinates, '-')
            const grid = operateMatrixes(gridWithoutTetrimino, state.currentTetrimino.shape, currentTetriminoCoordinates, '+')
           
            const hasCellsCollisions = containsValueGreaterThanOne(grid)
            
            if (hasCellsCollisions) {
                return {
                    ...state,
                    currentTetrimino: null,
                }
            }
 
            return {
                ...state,
                grid,
                currentTetrimino: {
                    ...state.currentTetrimino, 
                    coordinates: currentTetriminoCoordinates,
                },
            }
        }),

        on(gameActions.rotateTetrimino, (state) => {
            
            if (!state.grid || !state.currentTetrimino) return state
            
            const currentTetriminoShape = getRotatedMatrix(state.currentTetrimino.shape, '-90deg')

            const gridWithoutTetrimino = operateMatrixes(state.grid, state.currentTetrimino.shape, state.currentTetrimino.coordinates, '-')
            
            const allowOperate = canOperateMatrixes(gridWithoutTetrimino, currentTetriminoShape, state.currentTetrimino.coordinates)
            
            if (!allowOperate) {
                return state
            }

            const grid = operateMatrixes(gridWithoutTetrimino, currentTetriminoShape, state.currentTetrimino.coordinates, '+')

            return {
                ...state,
                grid,
                currentTetrimino: {
                    ...state.currentTetrimino, 
                    shape: currentTetriminoShape,
                },
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

export function injectGameFeature() {

    const store = inject(Store)
  
    return {
        grid: store.selectSignal(gameFeature.selectGrid),
        currentTetrimino: store.selectSignal(gameFeature.selectCurrentTetrimino),
        nextTetrimino: store.selectSignal(gameFeature.selectNextTetrimino),

        score: store.selectSignal(gameFeature.selectScore),
        playerName: store.selectSignal(gameFeature.selectPlayerName),

        resetGame: () => store.dispatch(gameActions.resetGame()),
        setPlayerName: (playerName: string) => store.dispatch(gameActions.setPlayerName({playerName})),

        spawnTetrimino: () => store.dispatch(gameActions.spawnTetrimino()),
        moveDownTetrimino: () => store.dispatch(gameActions.moveDownTetrimino()),
        moveLeftTetrimino: () => store.dispatch(gameActions.moveHorizontalTetrimino({Xoffset: -1})),
        moveRightTetrimino: () => store.dispatch(gameActions.moveHorizontalTetrimino({Xoffset: 1})),
        rotateTetrimino: () => store.dispatch(gameActions.rotateTetrimino()),
    
    }
}

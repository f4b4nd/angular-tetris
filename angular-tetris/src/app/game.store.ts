import { Store, createFeature, createReducer, createActionGroup, props, emptyProps, on } from "@ngrx/store"
import { inject } from '@angular/core'

import { tetriminoModels } from "./tetrimino.model"
import { getMatrixApplyGravity, getMatrixDeleteFullRows, getNumberOfFullRows, containsValueGreaterThanOne} from "./utils/matrix-utils"
import { operateMatrixes, canOperateMatrixes } from "./utils/operateMatrixes"
import { getRotatedMatrix } from "./utils/rotateMatrix"
import { isBottomCollision, isLeftCollision, isRightCollision } from "./utils/collisions"
import { GRID_SIZE, GRID_WIDTH } from "./utils/constants"


export const initialGameState: GameState = {
    gridWidth: GRID_WIDTH,
    gridSize: GRID_SIZE,
    grid: Array(GRID_SIZE).fill(Array(GRID_WIDTH).fill(0)),
    activeTetrimino: null,
    isGameOver: false,
    isPaused: false,
    score: 0,
    playerName: null,
    nextTetrimino: null,
}


export const gameActions = createActionGroup({
    source: 'Game',
    events: {

        spawnTetrimino: emptyProps(),
        moveHorizontalTetrimino: props<{ Xoffset: 1 | -1 }>(),
        moveDownTetrimino: emptyProps(),
        rotateTetrimino:  emptyProps(),
    }
})


export const gameFeature = createFeature({
    name: 'game',
    reducer: createReducer(

        initialGameState,

        on(gameActions.spawnTetrimino, (state) => {

            if (state.activeTetrimino) return state

            const randomIdx = Math.floor(Math.random() * tetriminoModels.length)
            const randomTetrimino = tetriminoModels[randomIdx]

            return {
                ...state,
                grid: operateMatrixes(state.grid, randomTetrimino.shape, randomTetrimino.coordinates, '+'),
                activeTetrimino: randomTetrimino,
            }
        }),

        on(gameActions.moveHorizontalTetrimino, (state, action) => {
            
            if (!state.activeTetrimino) return state
            
            if (action.Xoffset === -1 && isLeftCollision(state.grid, state.activeTetrimino.shape, state.activeTetrimino.coordinates)) {
                return state
            }

            if (action.Xoffset === 1 && isRightCollision(state.grid, state.activeTetrimino.shape, state.activeTetrimino.coordinates)) {
                return state
            }

            const activeTetriminoCoordinates = {
                x: state.activeTetrimino.coordinates.x + action.Xoffset, 
                y: state.activeTetrimino.coordinates.y, 
            }

            const gridWithoutTetrimino = operateMatrixes(state.grid, state.activeTetrimino.shape, state.activeTetrimino.coordinates, '-')
            const grid = operateMatrixes(gridWithoutTetrimino, state.activeTetrimino.shape, activeTetriminoCoordinates, '+')
            
            const hasCellsCollisions = containsValueGreaterThanOne(grid)

            if (hasCellsCollisions) {
                return state
            }

            return {
                ...state,
                grid,
                activeTetrimino: {
                    ...state.activeTetrimino, 
                    coordinates: activeTetriminoCoordinates,
                },
            }
        }),

        on(gameActions.moveDownTetrimino, (state) => {
            
            if (!state.activeTetrimino) return state
            
            if (getNumberOfFullRows(state.grid) > 0) {
                
                let gridCleaned = getMatrixDeleteFullRows(state.grid)
                gridCleaned = getMatrixApplyGravity(gridCleaned)

                return {
                    ...state,
                    grid: gridCleaned,
                    activeTetrimino: null,
                }
            }


            if (isBottomCollision(state.grid, state.activeTetrimino.shape, state.activeTetrimino.coordinates)) {
                return {
                    ...state,
                    activeTetrimino: null,
                }
            }

            const activeTetriminoCoordinates = {
                x: state.activeTetrimino.coordinates.x, 
                y: state.activeTetrimino.coordinates.y + 1, 
            }

            const gridWithoutTetrimino = operateMatrixes(state.grid, state.activeTetrimino.shape, state.activeTetrimino.coordinates, '-')
            const grid = operateMatrixes(gridWithoutTetrimino, state.activeTetrimino.shape, activeTetriminoCoordinates, '+')
           
            const hasCellsCollisions = containsValueGreaterThanOne(grid)
            
            if (hasCellsCollisions) {
                return {
                    ...state,
                    activeTetrimino: null,
                }
            }
 
            return {
                ...state,
                grid,
                activeTetrimino: {
                    ...state.activeTetrimino, 
                    coordinates: activeTetriminoCoordinates,
                },
            }
        }),

        on(gameActions.rotateTetrimino, (state) => {
            
            if (!state.activeTetrimino) return state
            
            const clockwise = true
            const activeTetriminoShape = getRotatedMatrix(state.activeTetrimino.shape, !clockwise)


            const gridWithoutTetrimino = operateMatrixes(state.grid, state.activeTetrimino.shape, state.activeTetrimino.coordinates, '-')
            
            const allowOperate = canOperateMatrixes(gridWithoutTetrimino, activeTetriminoShape, state.activeTetrimino.coordinates)
            
            if (!allowOperate) {
                return state
            }

            const grid = operateMatrixes(gridWithoutTetrimino, activeTetriminoShape, state.activeTetrimino.coordinates, '+')

            return {
                ...state,
                grid,
                activeTetrimino: {
                    ...state.activeTetrimino, 
                    shape: activeTetriminoShape,
                },
            }
        }),

    ),

})

export function injectGameFeature() {

    const store = inject(Store)
  
    return {
        grid: store.selectSignal(gameFeature.selectGrid),
        activeTetrimino: store.selectSignal(gameFeature.selectActiveTetrimino),
        
        spawnTetrimino: () => store.dispatch(gameActions.spawnTetrimino()),
        moveDownTetrimino: () => store.dispatch(gameActions.moveDownTetrimino()),
        moveLeftTetrimino: () => store.dispatch(gameActions.moveHorizontalTetrimino({Xoffset: -1})),
        moveRightTetrimino: () => store.dispatch(gameActions.moveHorizontalTetrimino({Xoffset: 1})),
        rotateTetrimino: () => store.dispatch(gameActions.rotateTetrimino()),
    }
}

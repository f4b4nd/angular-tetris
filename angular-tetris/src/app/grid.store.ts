import { Store, createFeature, createReducer, createActionGroup, props, emptyProps, on, createSelector } from "@ngrx/store"
import { inject } from '@angular/core'

import { Tetrimino, tetriminoModels } from "./tetrimino.model"
import { operateMatrixes } from "./utils/sumMatrixes"
import { getRotatedMatrix } from "./utils/rotateMatrix"

const numberOfColumns = 10
const numberOfRows = 21

export type GridState = {
    numberOfColumns: number,
    numberOfRows: number,
    grid: number[][],
    activeTetrimino: Tetrimino|null,
}


export const initialGridState: GridState = {
    numberOfColumns,
    numberOfRows,
    grid: Array(numberOfRows).fill(Array(numberOfColumns).fill(0)),
    activeTetrimino: null,
}


export const gridActions = createActionGroup({
    source: 'Grid',
    events: {
        loadGrid: emptyProps(),

        spawnTetrimino: props<{ tetriminos: Tetrimino[] }>(),
        moveTetrimino: props<{ Xoffset: 1 | -1 | 0, Yoffset: 1 | 0 }>(),
        rotateTetrimino:  emptyProps(),
    }
})


export const gridFeature = createFeature({
    name: 'grid',
    reducer: createReducer(

        initialGridState,

        on(gridActions.spawnTetrimino, (state, action) => {
            const randomIdx = Math.floor(Math.random() * action.tetriminos.length)
            const randomTetrimino = action.tetriminos[randomIdx]
            return {
                ...state,
                grid: operateMatrixes(state.grid, randomTetrimino.shape, randomTetrimino.coordinates, '+'),
                activeTetrimino: randomTetrimino,
            }
        }),

        on(gridActions.moveTetrimino, (state, action) => {
            
            if (!state.activeTetrimino) return state
            
            const activeTetriminoCoordinates = {
                x: state.activeTetrimino.coordinates.x + action.Xoffset, 
                y: state.activeTetrimino.coordinates.y + action.Yoffset, 
            }

            const gridWithoutTetrimino = operateMatrixes(state.grid, state.activeTetrimino.shape, state.activeTetrimino.coordinates, '-')
            const grid = operateMatrixes(gridWithoutTetrimino, state.activeTetrimino.shape, activeTetriminoCoordinates, '+')
           
            return {
                ...state,
                grid,
                activeTetrimino: {
                    ...state.activeTetrimino, 
                    coordinates: activeTetriminoCoordinates,
                },
            }
        }),

        on(gridActions.rotateTetrimino, (state, action) => {
            
            if (!state.activeTetrimino) return state
            
            const clockwise = false
            const activeTetriminoShape = getRotatedMatrix(state.activeTetrimino.shape, clockwise)

            const gridWithoutTetrimino = operateMatrixes(state.grid, state.activeTetrimino.shape, state.activeTetrimino.coordinates, '-')
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

export function injectGridFeature() {

    const store = inject(Store)
  
    return {
        grid: store.selectSignal(gridFeature.selectGrid),
        activeTetrimino: store.selectSignal(gridFeature.selectActiveTetrimino),
        
        loadGrid: () => store.dispatch(gridActions.loadGrid()),
        spawnTetrimino: (tetriminos: Tetrimino[]) => store.dispatch(gridActions.spawnTetrimino({tetriminos})),
        moveDownTetrimino: () => store.dispatch(gridActions.moveTetrimino({Xoffset: 0, Yoffset:1})),
        moveLeftTetrimino: () => store.dispatch(gridActions.moveTetrimino({Xoffset: -1, Yoffset:0})),
        moveRightTetrimino: () => store.dispatch(gridActions.moveTetrimino({Xoffset: 1, Yoffset:0})),
        rotateTetrimino: () => store.dispatch(gridActions.rotateTetrimino()),
    }
}


/**
 soit il faut les coordonnées de la partie non intégrée à la grille = tetrimino actif
 

 soit 
 */
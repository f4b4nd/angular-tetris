import { Store, createFeature, createReducer, createActionGroup, props, emptyProps, on, createSelector } from "@ngrx/store"
import { inject } from '@angular/core'

import { Tetrimino, tetriminoModels } from "./tetrimino.model"
import { sumMatrixes } from "./utils/sumMatrixes"

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
        dropTetrimino: props<{ tetrimino: Tetrimino }>(),
        moveLeftTetrimino: props<{ tetrimino: Tetrimino }>(),
        moveRightTetrimino: props<{ tetrimino: Tetrimino }>(),
        rotateTetrimino: props<{ tetrimino: Tetrimino }>(),


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
                grid: sumMatrixes(state.grid, randomTetrimino.shape, randomTetrimino.coordinates),
                activeTetrimino: randomTetrimino,
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


    }
}


/**
 soit il faut les coordonnées de la partie non intégrée à la grille = tetrimino actif
 

 soit 
 */
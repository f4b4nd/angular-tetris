import { Store, createFeature, createReducer, createActionGroup, props, emptyProps, on, createSelector } from "@ngrx/store"
import { inject } from '@angular/core'

import { Tetrimino, tetriminoModels } from "./tetrimino.model"


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

        spawnTetrimino: props<{ tetrimino: Tetrimino }>(),
        dropTetrimino: props<{ tetrimino: Tetrimino }>(),
        moveLeftTetrimino: props<{ tetrimino: Tetrimino }>(),
        moveRightTetrimino: props<{ tetrimino: Tetrimino }>(),
        rotateTetrimino: props<{ tetrimino: Tetrimino }>(),

        // addTetrimino: props<{ tetrimino: Tetrimino }>(),

    }
})


export const gridFeature = createFeature({
    name: 'grid',
    reducer: createReducer(

        initialGridState,

        on(gridActions.spawnTetrimino, (state, action) => ({
            ...state,
            grid: state.grid,
            activeTetrimino: action.tetrimino,
        })),

    ),


})

export function injectGridFeature() {

    const store = inject(Store)
  
    return {
        grid: store.selectSignal(gridFeature.selectGrid),

        addTetrimino: (tetrimino: Tetrimino) => store.dispatch(gridActions.spawnTetrimino({ tetrimino })),
        loadGrid: () => store.dispatch(gridActions.loadGrid()),
    }
}


/*
export const selectFeature = (state: GridState) => state


export const gridSelector = createSelector(
    selectFeature, 
    (state) => state.grid
)
*/
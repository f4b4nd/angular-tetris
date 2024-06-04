import { Action } from "@ngrx/store"

import { GameboardGridState} from "./gameboard-grid.model"


export const ADD_TETRIMINO_TO_GRID = 'ADD_TETRIMINO_TO_GRID'

export function addTetriminoToGrid(state: GameboardGridState, action: Action) {

    switch (action.type) {

        case ADD_TETRIMINO_TO_GRID:
            return [...state, {payload: action.payload}]
        
        default:
            return state
        
    }


}

function calcGridTetrimino () {

    const tetrimino = {
        name: 'L',
        shape: [[1, 1], [1, 1]],
        coordinates: [2, 1],
        shapeCoordinates: [[{value: 1, coordinates: [2, 1]}, {value: 1, coordinates: [2, 2]}]]
    }

    const grid: GameboardGridState = []

    const result = [[1, 1, 1]]
    

}
import { Action } from "@ngrx/store"

import { GameboardGrid } from "./gameboard-grid.model"


export const SET_TETRIMINO = 'ADD_STEP_TETRIMINO'

export function addTetrimino(state: GameboardGrid, action: Action) {

    switch (action.type) {
        
        case SET_TETRIMINO:
            return [...state, action.payload]
        
        default:
            return state
        }


}
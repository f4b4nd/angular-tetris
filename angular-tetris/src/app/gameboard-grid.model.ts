import { createAction } from "@ngrx/store"

export type GameboardGridState =  number[][]


const numberOfRows = 21
const rowSize = 10

const gameboardRows: number[] = Array(numberOfRows).fill([])


const initialGridState: GameboardGridState = gameboardRows.map(_ => Array(rowSize).fill(0))


const grid = [[0, 0, 0], [0, 0, 0]]



// grid : observable 

// addition des matrices (grid + tetrimino). Ok si aucune valeur supérieure à 1.

// newTetrimino : apparition du tetrimino
// dropTetrimino : descendre les coordonnées du tetrimino
// rotateTetrimino : rotation du tetrimino

export const gridActions = createAction()


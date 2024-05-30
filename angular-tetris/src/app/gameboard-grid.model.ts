import { createActionGroup } from "@ngrx/store"

export type GameboardGridState = number[][]   


const nrows = 21
const ncolumns = 10

const gameboardRows: number[] = Array(nrows).fill([])


const initialGridState: GameboardGridState = gameboardRows.map(_ => Array(ncolumns).fill(0))


const grid = [[0, 0, 0], [0, 0, 0]]



// tetrimino : observable 


// newTetrimino : apparition du tetrimino
// dropTetrimino : descendre les coordonnées du tetrimino
// rotateTetrimino : rotation du tetrimino

export const gridActions = createActionGroup({
    events: {

    }

})
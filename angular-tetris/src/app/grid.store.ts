import { Tetrimino } from "./tetrimino.model"


const numberOfColumns = 10
const numberOfRows = 21

export type Grid = {
    numberOfColumns: number,
    numberOfRows: number,
    grid: number[][],
    tetrimino: Tetrimino|null,
}


export const initialGridState: Grid = {
    numberOfColumns,
    numberOfRows,
    tetrimino: null,
    grid: Array(numberOfRows).fill(Array(numberOfColumns).fill(0)),
}


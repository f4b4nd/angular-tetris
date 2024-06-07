type Matrix = number[][]

type Coordinates = { 
    x: number, 
    y: number,
}

type Tetrimino = {
    type: 'L'|'O'|'S'|'T',
    shape: Matrix,
    coordinates: Coordinates,
}

type Direction = 'up' | 'down' | 'left' | 'right'

type GridState = {
    numberOfColumns: number,
    numberOfRows: number,
    grid: Matrix,
    activeTetrimino: Tetrimino|null,
}
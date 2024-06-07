type Matrix = number[][]

type Coordinates = { 
    x: number, 
    y: number,
}

type Tetrimino = {
    type: 'I'|'L'|'O'|'S'|'T'|'Z',
    shape: Matrix,
    coordinates: Coordinates,
}

type Direction = 'up' | 'down' | 'left' | 'right'

type GridState = {
    grid_width: number,
    grid_size: number,
    grid: Matrix,
    activeTetrimino: Tetrimino|null,
    isGameOver: boolean,
    isPaused: boolean,
}
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

type GameState = {
    gridWidth: number,
    gridSize: number,
    grid: Matrix,
    activeTetrimino: Tetrimino|null,
    isGameOver: boolean,
    isPaused: boolean,
    score: number,
    playerName: string | null,
    nextTetrimino: Tetrimino | null,
}
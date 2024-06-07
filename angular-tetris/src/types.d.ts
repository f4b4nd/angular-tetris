type Matrix = number[][]

type Coordinates = { 
    x: number, 
    y: number,
}

type Tetrimino = {
    type: 'I'|'J'|'L'|'O'|'S'|'T'|'Z',
    shape: Matrix,
    coordinates: Coordinates,
}

type Direction = 'up' | 'down' | 'left' | 'right'

type GameState = {

    grid: Matrix|null,
    activeTetrimino: Tetrimino|null,
    isGameOver: boolean,
    isPaused: boolean,
    score: number,
    playerName: string | null,
    nextTetrimino: Tetrimino | null,
}
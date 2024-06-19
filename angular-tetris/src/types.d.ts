type Matrix = number[][]

type Coordinates = { 
    x: number, 
    y: number,
}

type OffsetCoordinates = {
    Xoffset: number,
    Yoffset: number,
}


type Tetrimino = {
    type: 'I'|'J'|'L'|'O'|'S'|'T'|'Z',
    shape: Matrix,
    nextShape: Matrix,
    coordinates: Coordinates,
}

type Direction = 'up' | 'down' | 'left' | 'right'

type GameState = {
    isGameOver: boolean,
    isPaused: boolean,
    score: number,
    playerName: string | null,
    grid: Matrix,
    currentTetrimino: Tetrimino|null,
    nextTetrimino: Tetrimino | null,
    speed: number,
}
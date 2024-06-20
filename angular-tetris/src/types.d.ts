type Matrix = number[][]

type Coordinates = { 
    x: number, 
    y: number,
}

type OffsetCoordinates = {
    Xoffset: number,
    Yoffset: number,
}


type Tetromino = {
    type: 'I'|'J'|'L'|'O'|'S'|'T'|'Z',
    shape: Matrix,
    nextShape: Matrix,
    coordinates: Coordinates,
}

type Direction = 'rotation' | 'down' | 'left' | 'right'

type GameState = {
    isGameOver: boolean,
    isPaused: boolean,
    score: number,
    playerName: string | null,
    grid: Matrix,
    currentTetromino: Tetromino|null,
    nextTetromino: Tetromino | null,
    speed: 1 | 2,
}
type Matrix = number[][]

type Coordinates = { x: number, y: number }

type Tetrimino = {
    type: 'L'|'O'|'S'|'T',
    shape: Matrix,
    coordinates: Coordinates,
}

export type Tetrimino = {
    type: 'L'|'O'|'S'|'T',
    shape: number[][],
    coordinates: number[],
}

const initialCoordinates = [0, 0]

const initialShapes = {
    'L':  [[1, 0], [1, 0], [1, 1]],
    'O':  [[1, 1], [1, 1]],
    'S':  [[1, 0], [1, 1], [0, 1]],
    'T':  [[0, 1, 0], [1, 1, 1]],
}


export const tetriminoModels: Array<Tetrimino> = [
    {
        type: 'L',
        shape: initialShapes['L'],
        coordinates: initialCoordinates,
    },
    {
        type: 'O',
        shape: initialShapes['O'],
        coordinates: initialCoordinates,
    },
    {
        type: 'S',
        shape: initialShapes['S'],
        coordinates: initialCoordinates,
    },
    {
        type: 'T',
        shape: initialShapes['T'],
        coordinates: initialCoordinates,
    },
]

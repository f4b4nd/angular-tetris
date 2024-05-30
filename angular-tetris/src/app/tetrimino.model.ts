const tetriminoModels = [
    {
        name: 'L',
        shape: [[1, 0], [1, 0], [1, 1]],
    },
    {
        name: 'O',
        shape: [[1, 1], [1, 1]],
    },
    {
        name: 'S',
        shape: [[1, 0], [1, 1], [0, 1]],
    },
    {
        name: 'T',
        shape: [[0, 1, 0], [1, 1, 1]],
    },
]


const tetriminoInstance = {
    name: 'L',
    currentShape: [[1, 0], [1, 0], [1, 1]],
    coordinates : [0, 0]
}

// current grid state = grid state + tetrimino instance

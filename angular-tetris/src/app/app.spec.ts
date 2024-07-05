import { isVerticalFull } from "./utils/matrix-utils";
import { addTetrominoToGrid, removeTetrominoFromGrid } from "./utils/operateMatrixes";
import { getTransposedMatrix, getReversedColumnsMatrix, getReversedRowsMatrix } from "./utils/rotateMatrix";

describe('Pure function', () => {

  it('transpose matrix M with expected result', () => {
    const M = [
      [1, 2],
      [3, 4],
      [5, 6],
    ]
    const T = [
      [1, 3, 5],
      [2, 4, 6],
    ]

    expect(getTransposedMatrix(M) as any).toEqual(T)
    expect(getTransposedMatrix(T) as any).toEqual(M)

  });

  it('should reverse M matrix columns  with expected result', () => {
    const M = [
      [1, 2],
      [3, 4],
      [5, 6],
    ]
    const T = [
      [2, 1],
      [4, 3],
      [6, 5],
    ]

    expect(getReversedColumnsMatrix(M) as any).toEqual(T)

  });

  it('should reverse M matrix rows  with expected result', () => {
    const M = [
      [1, 2],
      [3, 4],
      [5, 6],
    ]
    const T = [
      [5, 6],
      [3, 4],
      [1, 2],
    ]

    expect(getReversedRowsMatrix(M) as any).toEqual(T)

  });
  
  it('should return if the matrix is has at least 1 column full', () => {
    const M1 = [
      [1, 0, 1, 1],
      [1, 0, 1, 1],
      [1, 1, 0, 0],
    ]
    const M2 = [
      [0, 0, 1, 1],
      [0, 0, 1, 1],
      [0, 1, 0, 0],
    ]

    expect(isVerticalFull(M1) as any).toEqual(true)
    expect(isVerticalFull(M2) as any).toEqual(false)

  });


  it('should add tetromino to the grid taking account of tetromino position', () => {
    const grid1 = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 0, 0, 0],
      [0, 1, 0, 0],
    ]
    const shape1 = [
      [1, 0],
      [1, 0],
      [1, 1],
    ]
    const coords1 = {x: 2, y: 1}
    const res1 = [
      [0, 0, 0, 0],
      [0, 0, 1, 0],
      [1, 0, 1, 0],
      [0, 1, 1, 1],
    ]
    /*------------*/
    const grid2 = [
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]
    const shape2 = [
      [1, 0],
      [1, 0],
      [1, 1],
    ]
    const coords2 = { x: 1, y: 2 }

    const res2 = [
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]

    expect(addTetrominoToGrid(grid1, shape1, coords1)).toEqual(res1);
    expect(addTetrominoToGrid(grid2, shape2, coords2)).toEqual(res2);


  });


  it('should remove tetromino to the grid taking account of tetromino position', () => {
    const grid1 = [
      [0, 0, 0, 0],
      [0, 0, 1, 0],
      [1, 0, 1, 0],
      [0, 1, 1, 1],
    ]
    const shape1 = [
      [1, 0],
      [1, 0],
      [1, 1],
    ]
    const coords1 = {x: 2, y: 1}
    const res1 = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 0, 0, 0],
      [0, 1, 0, 0],
    ]

    expect(removeTetrominoFromGrid(grid1, shape1, coords1)).toEqual(res1);

  });

});

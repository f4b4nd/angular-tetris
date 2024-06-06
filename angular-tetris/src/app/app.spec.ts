import { operateMatrixes } from "./utils/sumMatrixes";
import { getTransposedMatrix, getReversedColumnsMatrix, getReversedRowsMatrix } from "./utils/rotateMatrix";

describe('Pure function', () => {

  it('should sum two matrices M and T from a Tcoords origin, with expected result', () => {
    const M: number[][] = [
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]
    const T: number[][] = [
      [1, 0],
      [1, 0],
      [1, 1],
    ]
    const Tcoords = { x: 1, y: 2 }

    const res: number[][] = [
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]

    expect((operateMatrixes(M, T, Tcoords, '+') as any).toEqual(res))

  })

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

    expect((getTransposedMatrix(M) as any).toEqual(T))
    expect((getTransposedMatrix(T) as any).toEqual(M))

  })

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

    expect((getReversedColumnsMatrix(M) as any).toEqual(T))

  })

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

    expect((getReversedRowsMatrix(M) as any).toEqual(T))

  })
});

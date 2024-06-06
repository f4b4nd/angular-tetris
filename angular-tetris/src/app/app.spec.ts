import { sumMatrixes } from "./utils/sumMatrixes";

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

    expect((sumMatrixes(M, T, Tcoords) as any).toEqual(res))

  })
});

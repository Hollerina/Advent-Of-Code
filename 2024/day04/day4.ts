import * as fs from 'fs'
const rows = fs.readFileSync('./day04/day4.txt', 'utf-8').split('\n')

// have an array which holds the combinations
const combinations = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
  [1, 1],
  [-1, -1],
  [1, -1],
  [-1, 1],
]
const text = 'XMAS'

const surroundings = (i: number, j: number) => {
  let wordsArray: string[] = []
  // For every element in combinations, test up to 3 elements away using the values
  for (let combination of combinations) {
    let indexI = i + combination[0]
    let indexJ = j + combination[1]
    let steps = 0
    let tempstr = 'X'

    while (steps < 3) {
      // check if either of them make the input undefined
      if (
        indexI < 0 ||
        indexI > rows.length - 1 ||
        indexJ < 0 ||
        indexJ > rows.length - 1
      ) {
        break
      }
      // if valid then add to temp string
      tempstr += rows[indexI][indexJ]
      indexI += combination[0]
      indexJ += combination[1]
      steps++
    }
    wordsArray.push(tempstr)
  }
  return wordsArray.filter((word) => word === text).length
}

// Loop through rows looking for "X"

let total = 0
for (let i = 0; i < rows.length; i++) {
  for (let j = 0; j < rows[i].length; j++) {
    if (rows[i][j] === 'X') {
      total += surroundings(i, j)
    }
  }
}

console.log(total)

// couple the pairings in an object
const couplings = [
  { M: [-1, -1], S: [1, 1] },
  { M: [1, -1], S: [-1, 1] },
  { M: [-1, 1], S: [1, -1] },
  { M: [1, 1], S: [-1, -1] },
]

const masSurroundings = (i: number, j: number) => {
  // Run through each coupling and checking the key against value
  let total = 0
  for (let coupling of couplings) {
    //Need checks if bigger
    let indexMI = i + coupling.M[0]
    let indexMJ = j + coupling.M[1]
    let indexSI = i + coupling.S[0]
    let indexSJ = j + coupling.S[1]
    const invalidI =
      indexMI < 0 ||
      indexMI > rows.length - 1 ||
      indexSI < 0 ||
      indexSI > rows.length - 1
    const invalidJ =
      indexMJ < 0 ||
      indexMJ > rows[i].length - 1 ||
      indexSJ < 0 ||
      indexSJ > rows[i].length - 1
    //If any are not valid then continue onto next
    if (invalidI || invalidJ) {
      continue
    }
    if (rows[indexMI][indexMJ] === 'M' && rows[indexSI][indexSJ] === 'S') {
      total += 1
    }
  }

  return total === 2 ? 1 : 0
}

// Part 2
let totalPart2 = 0
for (let i = 0; i < rows.length; i++) {
  for (let j = 0; j < rows[i].length; j++) {
    if (rows[i][j] === 'A') {
      totalPart2 += masSurroundings(i, j)
    }
  }
}

console.log(totalPart2)

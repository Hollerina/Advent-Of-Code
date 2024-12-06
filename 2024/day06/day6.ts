import * as fs from 'node:fs'

const lines = fs.readFileSync('./day06/day6.txt', 'utf-8').split('\n')

// Loop through each and find indexOf("^") once found can break and split into arrays
let startIndex: number[] = []
let arrayGrid: string[][] = []
for (let i = 0; i < lines.length; i++) {
  arrayGrid.push(lines[i].split(''))
  let jIndex = arrayGrid[i].indexOf('^')
  if (jIndex !== -1) {
    startIndex = [i, jIndex]
    arrayGrid[i][jIndex] = 'X'
  }
}

console.log(startIndex)

// First direction is +1 on i
const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
]
let indexDirection = 0
let found = false
let indexI = startIndex[0]
let indexJ = startIndex[1]
let totalSteps = 0

while (!found) {
  indexI += directions[indexDirection][0]
  indexJ += directions[indexDirection][1]
  // If indexI and indexJ are out of bounds then found = true and break
  if (
    indexI < 0 ||
    indexI > arrayGrid.length - 1 ||
    indexJ < 0 ||
    indexJ > arrayGrid[0].length - 1
  ) {
    found = true
    break
  }
  // If # then need to turn around
  if (arrayGrid[indexI][indexJ] === '#') {
    indexI -= directions[indexDirection][0]
    indexJ -= directions[indexDirection][1]
    indexDirection++
    indexDirection = indexDirection % 4
  } else {
    arrayGrid[indexI][indexJ] = 'X'
  }
}

for (let row of arrayGrid) {
  totalSteps += row.filter((x) => x === 'X').length
}

console.log(totalSteps)

// If hit the loop directly on then can be made, store positions so algorithm can carry on searching if that one has been found
let foundPositions: number[][] = []

//If inline with the lines and no obsticles in way then a loop can be made at point which would cause it
// has to be 90 degrees from direction already in
indexDirection = 0
indexI = startIndex[0]
indexJ = startIndex[1]
let arrayGrid2: string[][] = []

//Helper Function to determine if can connect to path
const findIfNearLine = (i: number, j: number, directionIndex: number) => {
  let found = false
  if (directionIndex === 0 || directionIndex === 2) {
    // Check if there is there is a horizontal
    while (!found) {
      //If hit an obstacle or out of bounds then break
      if (
        i < 0 ||
        i > arrayGrid2.length - 1 ||
        j < 0 ||
        j > arrayGrid2[0].length - 1
      ) {
        break
      }
      if (arrayGrid2[i][j] === '#') {
        break
      }
      if (arrayGrid2[i][j] === '-' || arrayGrid2[i][j] === '+') {
        found = true
        break
      }
      i += directions[directionIndex][0]
      j += directions[directionIndex][1]
    }
  } else {
    while (!found) {
      //If hit an obstacle or out of bounds then break
      if (
        i < 0 ||
        i > arrayGrid2.length - 1 ||
        j < 0 ||
        j > arrayGrid2[0].length - 1
      ) {
        break
      }
      if (arrayGrid2[i][j] === '#') {
        break
      }
      if (arrayGrid2[i][j] === '|' || arrayGrid2[i][j] === '+') {
        console.log(arrayGrid2[i][j])
        console.log(i, j)
        found = true
        break
      }
      i += directions[directionIndex][0]
      j += directions[directionIndex][1]
    }
  }

  return found
}

for (let i = 0; i < lines.length; i++) {
  arrayGrid2.push(lines[i].split(''))
  let jIndex = arrayGrid[i].indexOf('^')
  if (jIndex !== -1) {
    startIndex = [i, jIndex]
  }
}
found = false
while (!found) {
  indexI += directions[indexDirection][0]
  indexJ += directions[indexDirection][1]
  // If indexI and indexJ are out of bounds then found = true and break
  if (
    indexI < 0 ||
    indexI > arrayGrid2.length - 1 ||
    indexJ < 0 ||
    indexJ > arrayGrid2[0].length - 1
  ) {
    found = true
    break
  }
  // If # then need to turn around
  if (arrayGrid2[indexI][indexJ] === '#') {
    indexI -= directions[indexDirection][0]
    indexJ -= directions[indexDirection][1]
    arrayGrid2[indexI][indexJ] = '+'
    indexDirection++
    indexDirection = indexDirection % 4
  } else {
    if (arrayGrid2[indexI][indexJ] !== '.') {
      arrayGrid2[indexI][indexJ] = '+'
    } else if (indexDirection === 0 || indexDirection === 2) {
      arrayGrid2[indexI][indexJ] = '|'
    } else {
      arrayGrid2[indexI][indexJ] = '-'
    }
    if (
      findIfNearLine(indexI, indexJ, indexDirection) &&
      arrayGrid2[indexI][indexJ] !== '+'
    ) {
      foundPositions.push([
        indexI + directions[indexDirection][0],
        indexJ + directions[indexDirection][1],
      ])
    }
  }
}

console.log(foundPositions)

// Too many as if plus shouldn't send?

import * as fs from 'fs'
const rows = fs.readFileSync('./day04/day4.txt', 'utf-8').split('\n')
console.log(rows[2])

// Could have a surroundings for vertical and horizontals then another for diagonals, horizontal and vert only takes one value
//Can combine into functions to make easier to read, for things with symbols same way. End up with 4 while loops written instead of 8
const surroundings = (i: number, j: number) => {
  let surroundingWords: string[] = []
  //Horizontal to left
  let index = j
  let tempStr = ''
  while (index > j - 4) {
    console.log(index, index)
    if (index < 0) {
      break
    }
    tempStr += rows[i][index]
    index--
  }
  surroundingWords.push(tempStr)
  tempStr = ''
  index = j
  while (index < j + 4) {
    if (index >= rows[i].length) {
      break
    }
    tempStr += rows[i][index]
    index++
  }
  surroundingWords.push(tempStr)
  tempStr = ''
  index = i
  while (index > i - 4) {
    if (index < 0) {
      break
    }
    tempStr += rows[index][j]
    index--
  }
  surroundingWords.push(tempStr)
  tempStr = ''
  index = i
  while (index < i + 4) {
    if (index >= rows.length) {
      break
    }
    tempStr += rows[index][j]
    index++
  }
  surroundingWords.push(tempStr)
  console.log(surroundingWords.filter((word) => word === 'XMAS'))
}

const diagonalsSurrondings = (i: number, j: number) => {
  let surroundingWords: string[] = []
  //Horizontal to left
  let index = i
  let indexJ = j
  let tempStr = ''
  while (index > i - 4 && indexJ > j - 4) {
    console.log(index, index)
    if (index < 0 || indexJ < 0) {
      break
    }
    tempStr += rows[index][indexJ]
    index--
    indexJ--
  }
  surroundingWords.push(tempStr)
  tempStr = ''
  index = i
  indexJ = j
  while (index < i + 4 && indexJ < j + 4) {
    if (index >= rows.length || indexJ >= rows[i].length) {
      break
    }
    tempStr += rows[index][indexJ]
    index++
    indexJ++
  }
  //   surroundingWords.push(tempStr)
  //   tempStr = ''
  //   index = i
  //   while (index > i - 4) {
  //     if (index < 0) {
  //       break
  //     }
  //     tempStr += rows[index][j]
  //     index--
  //   }
  //   surroundingWords.push(tempStr)
  //   tempStr = ''
  //   index = i
  //   while (index < i + 4) {
  //     if (index >= rows.length) {
  //       break
  //     }
  //     tempStr += rows[index][j]
  //     index++
  //   }
  //   surroundingWords.push(tempStr)
  console.log('diagonal')
  console.log(surroundingWords.filter((word) => word === 'XMAS'))
}

// Loop through looking for x character
for (let i = 0; i < rows.length; i++) {
  console.log(rows[i])
  console.log(rows[i].length)
  for (let j = 0; j < rows[i].length; j++) {
    if (rows[i][j] === 'X') {
      // Then need to build surroundings
      console.log(i, j)
      surroundings(i, j)
      diagonalsSurrondings(i, j)
    }
  }
}

// improvements: to combine instead of breaking if they are out of bounds set to be zero instead or length
//If value becomes undefined then can just break as word would not be valid anyway

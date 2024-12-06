import * as fs from 'fs'
const input = fs.readFileSync('./day03/day3.txt', 'utf-8')

// Look for mul(num,num)
const re = /mul\(\d+,\d+\)/g
const found = input.match(re) || []
console.log(found)

let total = 0
found.forEach((pair) => {
  // split on ( to get rid of mul( then split on ) then on , for numbers
  pair = pair.split('mul(')[1]
  pair = pair.split(')')[0]
  const values = pair.split(',')
  total += Number(values[0]) * Number(values[1])
})

console.log('Part 1:', total)

// Part 2:  Find the muls, dos and donts. Find the index of these and determine if need to be on or off
const reDos = /do\(\)/g
const reDonts = /don\'t\(\)/g

let temp
let dosIndexs: number[] = []
while ((temp = reDos.exec(input)) !== null) {
  dosIndexs.push(reDos.lastIndex)
}
let dontsIndex: number[] = []
while ((temp = reDonts.exec(input)) !== null) {
  dontsIndex.push(reDonts.lastIndex)
}
let mulsIndexs: number[] = []
while ((temp = re.exec(input)) !== null) {
  mulsIndexs.push(re.lastIndex)
}

type switchIndexType = {
  index: number
  dir: boolean
}

let switched: boolean = true
let switchIndex: switchIndexType = {
  index: dontsIndex[0] < dosIndexs[0] ? dontsIndex[0] : dosIndexs[0],
  dir: dontsIndex[0] < dosIndexs[0] ? false : true,
}
dontsIndex[0] < dosIndexs[0] ? dontsIndex.shift() : dosIndexs.shift()
let totalPart2: number = 0

for (let i = 0; i < mulsIndexs.length; i++) {
  //Need to check if needs to be turned off or on, if muls index is bigger than switchIndex then need to flip bool
  if (mulsIndexs[i] > switchIndex.index) {
    switched = switchIndex.dir
    // If both are empty and entered if then switchIndex can be set to last value as no more switch
    if (dontsIndex.length === 0 && dosIndexs.length === 0) {
      switchIndex.index = mulsIndexs[mulsIndexs.length - 1] + 1
    } else {
      let dontIndexValue =
        dontsIndex.length === 0
          ? mulsIndexs[mulsIndexs.length - 1]
          : dontsIndex[0]
      let doIndexValue =
        dosIndexs.length === 0
          ? mulsIndexs[mulsIndexs.length - 1]
          : dosIndexs[0]
      switchIndex.index =
        dontIndexValue < doIndexValue ? dontsIndex[0] : dosIndexs[0]
    }

    switchIndex.dir = dontsIndex[0] < dosIndexs[0] ? false : true

    //Pop values
    dontsIndex[0] < dosIndexs[0] ? dontsIndex.shift() : dosIndexs.shift()
  }
  //Checking against do and do
  if (mulsIndexs[i] < switchIndex.index && switched) {
    // Then can do the muls
    let pair = found[i].split('mul(')[1]
    pair = pair.split(')')[0]
    const values = pair.split(',')
    totalPart2 += Number(values[0]) * Number(values[1])
  }
}

console.log(totalPart2)

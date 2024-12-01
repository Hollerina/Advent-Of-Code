import * as fs from 'fs';

const input = fs.readFileSync('./day01/day1.txt', 'utf-8').split("\n");

let firstList: number[] = []
let secondList: number[] = []

for(let i = 0; i < input.length; i++) {
    const split = input[i].split("   ")
    firstList.push(Number(split[0]))
    secondList.push(Number(split[1]))
}

//Sort the lists 
firstList.sort()
secondList.sort()

// Compare values at i and find difference
let runningDifference: number = 0
for(let i = 0; i < firstList.length; i++) {
    runningDifference += Math.abs(firstList[i] - secondList[i])
}

console.log('Part 1:', runningDifference)


// Part 2
let firstListPart2: number[] = []
let secondListPart2: number[] = []

for(let i = 0; i < input.length; i++) {
    const split = input[i].split("   ")
    firstListPart2.push(Number(split[0]))
    secondListPart2.push(Number(split[1]))
}

// For each value in first array filter second array with that value
let similarityScore: number = 0
for(let i = 0; i < firstListPart2.length; i++) {
    let count: number = 0
    secondListPart2.forEach((value) => (value === firstListPart2[i] && count++))
    similarityScore += count * firstListPart2[i]
}

console.log('Part 2:',similarityScore)
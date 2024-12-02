import * as fs from 'fs';

const input = fs.readFileSync('./day02/day2.txt', 'utf-8').split("\n");

const increasingNumbers = (numberArray: string[]) => {
    let state: string = "Safe"
    for(let i = 1; i < numberArray.length - 1; i++) {
        if(Number(numberArray[i + 1]) - Number(numberArray[i]) > 3 || Number(numberArray[i]) >= Number(numberArray[i + 1])) {
            state = "NotSafe"
            break
        }
    }
    return state
}

const decreasingNumbers = (numberArray: string[]) => {
    let state: string = "Safe"
    for(let i = 1; i < numberArray.length - 1; i++) {
        if(Number(numberArray[i]) - Number(numberArray[i + 1]) > 3 || Number(numberArray[i]) <= Number(numberArray[i + 1])) {
            state = "NotSafe"
            break
        }
    }
    return state
}

let safeCount: number = 0
let newSafeCount: number = 0
input.forEach((numbers) => {
    let splitNumbers = numbers.split(" ")
    let state: string = ""
    if(Number(splitNumbers[0]) < Number(splitNumbers[1]) && Number(splitNumbers[1]) - Number(splitNumbers[0]) <= 3) {
        state = increasingNumbers(splitNumbers)
    }
    else if (Number(splitNumbers[0]) > Number(splitNumbers[1]) && Number(splitNumbers[0]) - Number(splitNumbers[1]) <= 3)  {
        state = decreasingNumbers(splitNumbers)
    }

    if(state === "Safe") {
        safeCount++
    }

    // Part 2 Check if can rerun with the subtracted parts or when original state returned null
    if(state === "NotSafe" || state === "") {
        for(let i = 0; i < numbers.split(" ").length; i++) {
            splitNumbers = numbers.split(" ")
            splitNumbers.splice(i,1)
            if(Number(splitNumbers[0]) < Number(splitNumbers[1]) && Number(splitNumbers[1]) - Number(splitNumbers[0]) <= 3) {
                state = increasingNumbers(splitNumbers)
            }
            else if (Number(splitNumbers[0]) > Number(splitNumbers[1]) && Number(splitNumbers[0]) - Number(splitNumbers[1]) <= 3)  {
                state = decreasingNumbers(splitNumbers)
            }
            if(state === "Safe") {
                break
            }
        }
    }

    if(state === "Safe") {
        newSafeCount++
    }

})

console.log("Part 1:", safeCount)
console.log("Part 2:", newSafeCount)

import * as fs from 'fs';

const input = fs.readFileSync('./day02/day2.txt', 'utf-8').split("\n");

const increasingNumbers = (numberArray: string[]) => {
    let state: string = "Safe"
    for(let i = 1; i < numberArray.length - 1; i++) {
        if(Number(numberArray[i]) - Number(numberArray[i + 1]) > 3 || Number(numberArray[i]) <= Number(numberArray[i + 1])) {
            state = "NotSafe"
            break
        }
    }
    return state
}

const decreasingNumbers = (numberArray: string[]) => {
    let state: string = "Safe"
    for(let i = 1; i < numberArray.length - 1; i++) {
        if(Number(numberArray[i + 1]) - Number(numberArray[i]) > 3 || Number(numberArray[i]) >= Number(numberArray[i + 1])) {
            state = "NotSafe"
            break
        }
    }
    return state
}

// Run through each line
let safeCount: number = 0
input.forEach((numbers) => {
    const splitNumbers = numbers.split(" ")
    let state: string = ""
    if(Number(splitNumbers[0]) > Number(splitNumbers[1]) && Number(splitNumbers[0]) - Number(splitNumbers[1]) <= 3) {
        state = increasingNumbers(splitNumbers)
    }
    else if (Number(splitNumbers[0]) < Number(splitNumbers[1]) && Number(splitNumbers[1]) - Number(splitNumbers[0]) <= 3)  {
        state = decreasingNumbers(splitNumbers)
    }

    
    // Add to total
    if(state === "Safe") {
        safeCount++
    }
})

const newIncreasingNumbers = (numberArray: string[]) => {
    let state: string = "Safe"
    let removed: boolean = false
    for(let i = 0; i < numberArray.length - 1; i++) {
        if(Number(numberArray[i]) - Number(numberArray[i + 1]) > 3 || Number(numberArray[i]) <= Number(numberArray[i + 1])) {
            if(!removed) {
                removed = true
                numberArray.splice(i,1)
                i = i - 2
            }
            else {
                state = "NotSafe"
                break
            }
        }
    }
    console.log("final", numberArray)
    return state
}

const newDecreasingNumbers = (numberArray: string[]) => {
    let state: string = "Safe"
    let removed: boolean = false
    for(let i = 0; i < numberArray.length - 1; i++) {
        if(Number(numberArray[i + 1]) - Number(numberArray[i]) > 3 || Number(numberArray[i]) >= Number(numberArray[i + 1])) {
            if(!removed) {
                removed = true
                numberArray.splice(i,1)
                i = i -2
            }
            else {
                state = "NotSafe"
                break
            }
        }
    }
    console.log("final", numberArray)

    return state
}

let newSafeCount: number = 0
input.forEach((numbers) => {
    const splitNumbers = numbers.split(" ")
    console.log(splitNumbers)
    let state: string = ""
    if(Number(splitNumbers[0]) > Number(splitNumbers[1]) && Number(splitNumbers[0]) - Number(splitNumbers[1]) <= 3) {
        state = newIncreasingNumbers(splitNumbers)
    }
    else if (Number(splitNumbers[0]) < Number(splitNumbers[1]) && Number(splitNumbers[1]) - Number(splitNumbers[0]) <= 3)  {
        state = newDecreasingNumbers(splitNumbers)
    }

    console.log("state", state)


    if(state === "Safe") {
        newSafeCount++
    }

})

console.log("Part 1:", safeCount)
console.log("Part 2:", newSafeCount)

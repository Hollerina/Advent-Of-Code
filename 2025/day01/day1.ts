import * as fs from 'fs';

const words = fs.readFileSync('./day01/day1.txt', 'utf-8');
let instructions: Array<string> = words.split("\n");

const transform = (instructions) => { 
    return instructions.map(instruction => {
        if(instruction[0] === "R"){
            return Number(instruction.slice(1))
        }
        else {
            return -Number(instruction.slice(1))
        }
    })
}

function part1() {
    let value: number = 50
    let numberOfZeros: number = 0

    instructions.forEach( instruction => {
        let direction = instruction[0]
        let instructionValue = instruction.slice(1)

        if(direction === "R") {
            value = (value + Number(instructionValue))%100
        }
        else {
            value = value - Number(instructionValue)

            while(value < 0) {
                value = 100 + value
            }
        }

        if (value === 0) {
            numberOfZeros+=1
        }
    })

    return numberOfZeros
}

const part2Again = () => {
    let value: number = 50
    let numberOfZeros: number = 0
    let prevValue = 50

    const transformedInstructions = transform(instructions)

    transformedInstructions.forEach(instruction => {
        value+= instruction

        if(value >= 100) {
            numberOfZeros += Math.floor(value / 100)
            value = value%100
        }
        else if (value < 0) {
            let wasZero = prevValue !== 0 && 1
            numberOfZeros += Math.floor(value / -100) + wasZero
            value = ((value%100) + 100 ) % 100
        }
        else if (value === 0) {
            numberOfZeros += 1
        }

        prevValue = value
        })

    return numberOfZeros
}

console.log(part1());

console.log(part2Again());


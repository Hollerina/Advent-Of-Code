"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync('./day02/day2.txt', 'utf-8').split("\n");
var increasingNumbers = function (numberArray) {
    var state = "Safe";
    for (var i = 1; i < numberArray.length - 1; i++) {
        if (Number(numberArray[i]) - Number(numberArray[i + 1]) > 3 || Number(numberArray[i]) <= Number(numberArray[i + 1])) {
            state = "NotSafe";
            break;
        }
    }
    return state;
};
var decreasingNumbers = function (numberArray) {
    var state = "Safe";
    for (var i = 1; i < numberArray.length - 1; i++) {
        if (Number(numberArray[i + 1]) - Number(numberArray[i]) > 3 || Number(numberArray[i]) >= Number(numberArray[i + 1])) {
            state = "NotSafe";
            break;
        }
    }
    return state;
};
// Run through each line
var safeCount = 0;
input.forEach(function (numbers) {
    var splitNumbers = numbers.split(" ");
    console.log(splitNumbers);
    var state = "";
    if (Number(splitNumbers[0]) > Number(splitNumbers[1]) && Number(splitNumbers[0]) - Number(splitNumbers[1]) <= 3) {
        state = increasingNumbers(splitNumbers);
    }
    else if (Number(splitNumbers[0]) < Number(splitNumbers[1]) && Number(splitNumbers[1]) - Number(splitNumbers[0]) <= 3) {
        state = decreasingNumbers(splitNumbers);
    }
    console.log("state", state);
    // Add to total
    if (state === "Safe") {
        safeCount++;
    }
});
console.log("Part 1:", safeCount);

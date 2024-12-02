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
    var state = "";
    if (Number(splitNumbers[0]) > Number(splitNumbers[1]) && Number(splitNumbers[0]) - Number(splitNumbers[1]) <= 3) {
        state = increasingNumbers(splitNumbers);
    }
    else if (Number(splitNumbers[0]) < Number(splitNumbers[1]) && Number(splitNumbers[1]) - Number(splitNumbers[0]) <= 3) {
        state = decreasingNumbers(splitNumbers);
    }
    // Add to total
    if (state === "Safe") {
        safeCount++;
    }
});
var newIncreasingNumbers = function (numberArray) {
    var state = "Safe";
    var removed = false;
    for (var i = 0; i < numberArray.length - 1; i++) {
        if (Number(numberArray[i]) - Number(numberArray[i + 1]) > 3 || Number(numberArray[i]) <= Number(numberArray[i + 1])) {
            if (!removed) {
                removed = true;
                numberArray.splice(i, 1);
                i = i - 2;
            }
            else {
                state = "NotSafe";
                break;
            }
        }
    }
    console.log("final", numberArray);
    return state;
};
var newDecreasingNumbers = function (numberArray) {
    var state = "Safe";
    var removed = false;
    for (var i = 0; i < numberArray.length - 1; i++) {
        if (Number(numberArray[i + 1]) - Number(numberArray[i]) > 3 || Number(numberArray[i]) >= Number(numberArray[i + 1])) {
            if (!removed) {
                removed = true;
                numberArray.splice(i, 1);
                i = i - 2;
            }
            else {
                state = "NotSafe";
                break;
            }
        }
    }
    console.log("final", numberArray);
    return state;
};
var newSafeCount = 0;
input.forEach(function (numbers) {
    var splitNumbers = numbers.split(" ");
    console.log(splitNumbers);
    var state = "";
    if (Number(splitNumbers[0]) > Number(splitNumbers[1]) && Number(splitNumbers[0]) - Number(splitNumbers[1]) <= 3) {
        state = newIncreasingNumbers(splitNumbers);
    }
    else if (Number(splitNumbers[0]) < Number(splitNumbers[1]) && Number(splitNumbers[1]) - Number(splitNumbers[0]) <= 3) {
        state = newDecreasingNumbers(splitNumbers);
    }
    console.log("state", state);
    if (state === "Safe") {
        newSafeCount++;
    }
});
console.log("Part 1:", safeCount);
console.log("Part 2:", newSafeCount);

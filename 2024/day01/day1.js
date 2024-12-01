"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var input = fs.readFileSync('./day01/day1.txt', 'utf-8').split("\n");
var firstList = [];
var secondList = [];
for (var i = 0; i < input.length; i++) {
    var split = input[i].split("   ");
    firstList.push(Number(split[0]));
    secondList.push(Number(split[1]));
}
//Sort the lists 
firstList.sort();
secondList.sort();
// Compare values at i and find difference
var runningDifference = 0;
for (var i = 0; i < firstList.length; i++) {
    runningDifference += Math.abs(firstList[i] - secondList[i]);
}
console.log('Part 1:', runningDifference);
// Part 2
var firstListPart2 = [];
var secondListPart2 = [];
for (var i = 0; i < input.length; i++) {
    var split = input[i].split("   ");
    firstListPart2.push(Number(split[0]));
    secondListPart2.push(Number(split[1]));
}
// For each value in first array filter second array with that value
var similarityScore = 0;
var _loop_1 = function (i) {
    var count = 0;
    secondListPart2.forEach(function (value) { return (value === firstListPart2[i] && count++); });
    similarityScore += count * firstListPart2[i];
};
for (var i = 0; i < firstListPart2.length; i++) {
    _loop_1(i);
}
console.log('Part 2:', similarityScore);

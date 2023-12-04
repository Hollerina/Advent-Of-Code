"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var words = fs.readFileSync('./day1/day1.txt', 'utf-8');
var numbers = words.split("\n");
function part1() {
    //find the first and last 
    var sum = 0;
    var found_front = false;
    var found_back = false;
    var front_index = 0;
    var back_index = 0;
    var string_num = "";
    for (var i = 0; i < numbers.length; i++) {
        //Loop through array to find first and last digit
        back_index = numbers[i].length - 1;
        front_index = 0;
        string_num = "";
        while (!(found_back && found_front)) {
            if (!Number.isNaN(Number(numbers[i][front_index])) && !found_front) {
                //If this index  is a number then set the string version to a string of number
                string_num = numbers[i][front_index] + string_num;
                found_front = true;
            }
            if (!Number.isNaN(Number(numbers[i][back_index])) && !found_back) {
                //If this index  is a number then set the string version to a string of number
                string_num += numbers[i][back_index];
                found_back = true;
            }
            if (!found_front) {
                front_index += 1;
            }
            if (!found_back) {
                back_index -= 1;
            }
        }
        sum += Number(string_num);
        found_back = false;
        found_front = false;
    }
    return sum;
}
function part2() {
    var sum = 0;
    var hashmap = new Map();
    var array_hash = new Map();
    hashmap.set("one", "1");
    hashmap.set("two", "2");
    hashmap.set("three", "3");
    hashmap.set("four", "4");
    hashmap.set("five", "5");
    hashmap.set("six", "6");
    hashmap.set("seven", "7");
    hashmap.set("eight", "8");
    hashmap.set("nine", "9");
    array_hash.set("o", ["one"]);
    array_hash.set("t", ["two", "three"]);
    array_hash.set("f", ["four", "five"]);
    array_hash.set("s", ["six", "seven"]);
    array_hash.set("e", ["eight"]);
    array_hash.set("n", ["nine"]);
    var found_front = false;
    var found_back = false;
    var front_index = 0;
    var back_index = 0;
    var string_num = "";
    for (var i = 0; i < numbers.length; i++) {
        //Loop through each individual line
        // console.log(numbers[i]);
        back_index = numbers[i].length - 1;
        front_index = 0;
        string_num = "";
        while (!(found_front && found_back)) {
            // console.log(numbers[i][front_index]);
            // console.log(numbers[i][back_index]);
            if (!Number.isNaN(Number(numbers[i][front_index])) && !found_front) {
                //If this index  is a number then set the string version to a string of number
                string_num = numbers[i][front_index] + string_num;
                found_front = true;
            }
            if (!Number.isNaN(Number(numbers[i][back_index])) && !found_back) {
                //If this index  is a number then set the string version to a string of number
                string_num += numbers[i][back_index];
                found_back = true;
            }
            //checking if words
            if (array_hash.has(numbers[i][front_index]) && !found_front) {
                var possibilities = array_hash.get(numbers[i][front_index]);
                if (possibilities === undefined) {
                    continue;
                }
                //the array contains it so now need to check if that the inde following it match any of the arrays
                for (var j = 0; j < possibilities.length; j++) {
                    if (numbers[i].slice(front_index, front_index + possibilities[j].length) == possibilities[j]) {
                        string_num = hashmap.get(possibilities[j]) + string_num;
                        found_front = true;
                        break;
                    }
                }
            }
            if (array_hash.has(numbers[i][back_index]) && !found_back) {
                var possibilities = array_hash.get(numbers[i][back_index]);
                if (possibilities === undefined) {
                    continue;
                }
                //the array contains it so now need to check if that the inde following it match any of the arrays
                for (var j = 0; j < possibilities.length; j++) {
                    if (numbers[i].slice(back_index, back_index + possibilities[j].length) == possibilities[j]) {
                        string_num += hashmap.get(possibilities[j]);
                        found_back = true;
                        break;
                    }
                }
            }
            if (!found_front) {
                front_index += 1;
            }
            if (!found_back) {
                back_index -= 1;
            }
            if (front_index > numbers[i].length || back_index < 0) {
                break;
            }
        }
        sum += Number(string_num);
        found_back = false;
        found_front = false;
    }
    return sum;
}
console.log(part1());
console.log(part2());

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var words = fs.readFileSync('./day2/day2.txt', 'utf-8');
var games = words.split("\n");
function part1() {
    var split_arr = [];
    var game_index = [];
    var small_Set = 0;
    var sets = [];
    var split_set = [];
    var colour_map = new Map();
    var count = 0;
    var sum = 0;
    colour_map.set("r", 12);
    colour_map.set("g", 13);
    colour_map.set("b", 14);
    for (var i = 0; i < games.length; i++) {
        split_arr = games[i].split(": ");
        game_index = split_arr[0].split(" ");
        sets = split_arr[1].split("; ");
        for (var j = 0; j < sets.length; j++) {
            split_set = sets[j].split(", ");
            for (var k = 0; k < split_set.length; k++) {
                var split_element = split_set[k].split(" ");
                var split_get = colour_map.get(split_element[1][0]);
                if (split_get === undefined) {
                    continue;
                }
                if (Number(split_element[0]) <= split_get) {
                    small_Set += 1;
                }
            }
            if (small_Set == split_set.length) {
                count += 1;
            }
            small_Set = 0;
        }
        if (count == sets.length) {
            sum += Number(game_index[1]);
        }
        count = 0;
    }
    return sum;
}
function part2() {
    var split_arr = [];
    var game_index = [];
    var small_Set = 0;
    var sets = [];
    var split_set = [];
    var colour_map = new Map();
    var count = 0;
    var sum = 0;
    colour_map.set("r", 0);
    colour_map.set("g", 0);
    colour_map.set("b", 0);
    for (var i = 0; i < games.length; i++) {
        split_arr = games[i].split(": ");
        game_index = split_arr[0].split(" ");
        sets = split_arr[1].split("; ");
        for (var j = 0; j < sets.length; j++) {
            split_set = sets[j].split(", ");
            for (var k = 0; k < split_set.length; k++) {
                var split_element = split_set[k].split(" ");
                var split_get = colour_map.get(split_element[1][0]);
                if (split_get === undefined) {
                    continue;
                }
                if (Number(split_element[0]) >= split_get) {
                    colour_map.set(split_element[1][0], Number(split_element[0]));
                }
            }
        }
        //After sets calculate the sum thingy... and reset colourmap to 0
        var red = colour_map.get("r");
        var green = colour_map.get("b");
        var blue = colour_map.get("g");
        if (red === undefined || blue === undefined || green === undefined) {
            continue;
        }
        sum += (red * green * blue);
        colour_map.set("r", 0);
        colour_map.set("g", 0);
        colour_map.set("b", 0);
    }
    return sum;
}
console.log(part1());
console.log(part2());

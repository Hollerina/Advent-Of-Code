import * as fs from 'fs';

const words = fs.readFileSync('./day2/day2.txt', 'utf-8');
let games: Array<string> = words.split("\n");

function part1(): number{
    let split_arr: Array<string> = [];
    let game_index: Array<string> = [];
    let small_Set: number = 0;
    let sets: string[] = [];
    let split_set: Array<string> = [];
    let colour_map = new Map<string, number>();
    let count: number = 0;
    let sum: number = 0;
    colour_map.set("r", 12);
    colour_map.set("g", 13);
    colour_map.set("b", 14);

    for(let i = 0; i < games.length; i++){
        split_arr = games[i].split(": ");
        game_index = split_arr[0].split(" ");
        sets = split_arr[1].split("; ");

        for(let j = 0; j < sets.length; j++){
            split_set = sets[j].split(", ");
            
            for(let k =0; k < split_set.length; k++){
                let split_element = split_set[k].split(" ");
                let split_get: number | undefined = colour_map.get(split_element[1][0]);
                if (split_get === undefined) { continue }

                if(Number(split_element[0]) <= split_get){
                    small_Set += 1;
                }
            }
            if(small_Set == split_set.length){
                count += 1;
            }
            small_Set = 0;
        }
        if(count == sets.length){
            sum += Number(game_index[1]);
        }

        count = 0;
    }
    return sum;
}

function part2(): number{
    let split_arr: Array<string> = [];
    let game_index: Array<string> = [];
    let small_Set: number = 0;
    let sets: string[] = [];
    let split_set: Array<string> = [];
    let colour_map = new Map<string, number>();
    let count: number = 0;
    let sum: number = 0;
    colour_map.set("r", 0);
    colour_map.set("g", 0);
    colour_map.set("b", 0);

    for(let i = 0; i < games.length; i++){
        split_arr = games[i].split(": ");
        game_index = split_arr[0].split(" ");
        sets = split_arr[1].split("; ");

        for(let j = 0; j < sets.length; j++){
            split_set = sets[j].split(", ");
            
            for(let k =0; k < split_set.length; k++){
                let split_element = split_set[k].split(" ");
                let split_get: number | undefined = colour_map.get(split_element[1][0]);
                if (split_get === undefined) { continue }

                if(Number(split_element[0]) >= split_get){
                    colour_map.set(split_element[1][0],Number(split_element[0]));
                }
            }
        }
        //After sets calculate the sum thingy... and reset colourmap to 0
        let red: number | undefined = colour_map.get("r");
        let green: number | undefined = colour_map.get("b");
        let blue: number | undefined = colour_map.get("g");

        if (red === undefined || blue === undefined || green === undefined) { continue }
        sum += (red * green * blue);

        colour_map.set("r" , 0);
        colour_map.set("g" , 0)
        colour_map.set("b" , 0)
    }
    return sum;
}

console.log(part1());
console.log(part2());
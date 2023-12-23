use crate::Matching::{Matched, NoMatch};
use crate::Reflection::{Horizontal, Vertical};

mod reading_file;

#[derive(Debug, PartialEq, Clone, Copy)]
enum Reflection{
    Horizontal,
    Vertical
}

#[derive(PartialEq)]
enum Matching {
    Matched,
    NoMatch
}

fn part1(pattern: &str) -> (i32, Reflection) {
    let rows = pattern.split_whitespace().collect::<Vec<&str>>();
    let mut tiles: Vec<Vec<char>> = Vec::new();
    let mut count = 0;
    let mut temp: Vec<char> = Vec::new();


    for row in rows {
        tiles.push(row.chars().collect::<Vec<char>>());
    }

    //Loop through looking for a vertical split
    for i in 0..tiles[0].len() {
        for j in 0..tiles.len() {
            // println!("In print {:?} {:?}", tiles[j] , j);
            if reflect(tiles[j].clone(), i) == Matched {
                count += 1;
            }
            else {
                break;
            }
        }
        if count == tiles.len() {
            return ((i + 1) as i32, Vertical);
        }
        count = 0;
    }

    count = 0;

    //Loop through the horizontal split
    for i in 0..tiles.len() {
        for j in 0..tiles[i].len() {
            //Add to temp array for index j
            for k in 0..tiles.len(){
                temp.push(tiles[k][j]);

            }
            if reflect(temp.clone(), i) == Matched {
                count += 1;
            }
            else {
                break;
            }
            temp = Vec::new();
        }
        temp = Vec::new();
        if count == tiles[0].len() {
            return ((i + 1) as i32, Horizontal);
        }
        count = 0;

    }

    (0, Vertical)
}

fn part2(pattern: &str, index: usize, stored: &Vec<(i32, Reflection)>) -> (i32, Reflection) {
    let rows = pattern.split_whitespace().collect::<Vec<&str>>();
    let mut tiles: Vec<Vec<char>> = Vec::new();
    let mut count = 0;
    let mut temp: Vec<char> = Vec::new();
    let mut tiles_change: Vec<Vec<char>> = Vec::new();
    let mut found = false;


    for row in rows {
        tiles.push(row.chars().collect::<Vec<char>>());
    }

    for i_index in 0..tiles.len() {
        for j_index in 0..tiles[i_index].len() {


            if tiles[i_index][j_index] == '.' {
                //Create a copy of the orignal array to change
                tiles_change = tiles.clone();
                tiles_change[i_index][j_index] = '#';
            }
            else {
                tiles_change = tiles.clone();
                tiles_change[i_index][j_index] = '.';
            }

            //Proceed with matching
            for i in 0..tiles[0].len() {
                for j in 0..tiles.len() {
                    if stored[index] == ((i + 1) as i32, Vertical) {
                        break;
                    }
                    if reflect(tiles_change[j].clone(), i) == Matched {
                        count += 1;
                    }
                    else {
                        break;
                    }
                }
                if count == tiles.len() {
                    found = true;
                    return ((i + 1) as i32, Vertical);

                }
                count = 0;
            }
            count = 0;


            //Loop through the horizontal split
            for i in 0..tiles.len() {
                for j in 0..tiles[i].len() {
                    //Add to temp array for index j
                    if stored[index] == ((i + 1) as i32, Horizontal) {
                        break;
                    }
                    for k in 0..tiles.len() {
                        temp.push(tiles_change[k][j]);
                    }
                    if reflect(temp.clone(), i) == Matched {
                        count += 1;
                    } else {
                        break;
                    }
                    temp = Vec::new();
                }
                temp = Vec::new();
                if count == tiles[0].len() {
                    found = true;
                    return ((i + 1) as i32, Horizontal);
                }
                count = 0;
            }
        }
    }

    return (0, Vertical)
}

fn reflect(list: Vec<char>, index: usize) -> Matching {
    let mut back_index = index;
    let mut forward_index = index + 1;

    if forward_index == list.len() {
        return NoMatch;
    }

    while forward_index != list.len() {

        if list[back_index] != list[forward_index] {
            return NoMatch;
        }
        if back_index == 0 {
            break;
        }
        back_index -= 1;
        forward_index += 1;
    }
    return Matched;
}

fn main() {

    let lines_result = reading_file::read_entire::<String>("src\\day13.txt");
    //Get the string result out of lines_result
    let lines = lines_result.expect("Found Error");
    let parts = lines.split("\r\n\r\n").collect::<Vec<&str>>();
    let mut sum = 0;
    let mut sum2 = 0;
    let mut stored: Vec<(i32, Reflection)> = Vec::new();

    for part in parts.clone() {
        let (returned, direction) = part1(part);
        stored.push((returned, direction));

        if direction == Horizontal {
            sum += 100 * returned;
        }
        else{
            sum += returned;
        }
    }

    for (i,part) in parts.clone().iter().enumerate() {
        let (returned, direction) = part2(part,i, &stored);

        if direction == Horizontal {
            sum2 += 100 * returned;
        }
        else{
            sum2 += returned;
        }
    }

    println!("Part 1: {:?}", sum);
    println!("Part 2: {:?}", sum2);
}

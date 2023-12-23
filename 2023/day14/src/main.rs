use std::collections::HashMap;

mod reading_file;

fn part1(file: String) -> i32 {
    let tiles = file.split_whitespace().map(|row| row.chars().collect::<Vec<char>>()).collect::<Vec<Vec<char>>>();
    let mut sum:i32 = 0;
    let mut top_index: i32 = 0;


    for i in 0..tiles.len() {
        for j in 0..tiles.len() {
            //Loop through each of the columns to find where distance to top is
            if tiles[j][i] == '#' {
                //Then new top will be this index as it is solid
                top_index = (j + 1) as i32;
            }
            else if tiles[j][i] == 'O' {
                //Add to sum and find the new top
                sum += tiles.len() as i32 - top_index;
                top_index += 1;
            }
        }
        top_index = 0;
    }
    return sum;
}

fn part2(file: String) -> i32 {
    let mut tiles = file.split_whitespace().map(|row| row.chars().collect::<Vec<char>>()).collect::<Vec<Vec<char>>>();
    let mut stored:HashMap<Vec<Vec<char>>, usize> = HashMap::new();
    let mut found = false;
    let mut iteration = 1;
    let mut temp_tiles:Vec<Vec<char>>= Vec::new();
    let mut found_index: usize = 0;
    let mut top_index = 0;
    let mut sum = 0;

    while !found {
        //perform the cycle spin on the array
        tiles = four_spin(tiles.clone());
        if stored.contains_key(&tiles) {
            //then do the mod thing here
            found_index = *stored.get(&tiles).unwrap();
            println!("first found {:?} {:?}",found_index, iteration) ;

            found_index = ((1000000000 - found_index ) % (iteration - found_index)) + found_index;
            println!("second found {:?}",found_index);

            for (key,value) in stored.clone() {
                for k in &key {
                    println!("{:?}", k);
                }
                println!("------------------------------------------------ {:?}" ,value);
                if value == found_index {
                    temp_tiles = key;
                    println!("FOUND");
                    for line in &temp_tiles {
                        for c in line {
                            print!("{c}");
                        }
                        println!();
                    }
                    break;
                }
            }
            found = true;
        }
        else{
            stored.insert(tiles.clone(), iteration as usize);
            iteration += 1;
        }
    }

    // println!("{:?}", temp_tiles);

    for i in 0..temp_tiles.len() {
        for j in 0..temp_tiles.len() {
            //Loop through each of the columns to find where distance to top is
            if temp_tiles[j][i] == 'O' {
                println!("{:?} {:?} {:?} ", temp_tiles.len() - j, i ,j);
                sum += temp_tiles.len() - j;
            }
        }
        top_index = 0;
    }

    // for line in temp_tiles {
    //     println!("{:?}", line);
    // }

    return sum as i32;
}

fn four_spin(mut tiles: Vec<Vec<char>>) -> Vec<Vec<char>>{
    let mut top_index = 0;
    let mut sum = 0;

    //North loop
    for i in 0..tiles.len() {
        for j in 0..tiles.len() {
            //Loop through each of the columns to find where distance to top is
            if tiles[j][i] == '#' {
                //Then new top will be this index as it is solid
                top_index = (j + 1) as i32;
            }
            else if tiles[j][i] == 'O' {
                tiles[j][i] = '.';
                tiles[top_index as usize][i] = 'O';
                top_index += 1;
            }
        }
        top_index = 0;
    }
    top_index = 0;
    for i in 0..tiles.len() {
        for j in 0..tiles.len() {
            if tiles[i][j] == '#' {
                top_index = (j + 1) as i32;
            }
            else if tiles[i][j] == 'O' {
                tiles[i][j] = '.';
                tiles[i][top_index as usize] = 'O';
                top_index += 1;
            }
        }
        top_index = 0;
    }
    top_index = tiles.len() as i32 - 1;
    for i in 0..tiles.len() {
        for j in (0..tiles.len()).rev() {
            if tiles[j][i] == '#' && j != 0{
                //Then new top will be this index as it is solid
                top_index = (j - 1) as i32;
            }
            else if tiles[j][i] == 'O' {
                tiles[j][i] = '.';
                tiles[top_index as usize][i] = 'O';
                top_index -= 1;
            }
        }
        top_index = tiles.len() as i32 - 1;
    }
    top_index = tiles.len() as i32 - 1;
    for i in 0..tiles.len() {
        for j in (0..tiles.len()).rev() {
            if tiles[i][j] == '#'  && j!= 0{
                top_index = (j - 1) as i32;
            }
            else if tiles[i][j] == 'O' {
                tiles[i][j] = '.';
                tiles[i][top_index as usize] = 'O';
                top_index -= 1;
            }
        }
        top_index = tiles.len() as i32 - 1;
    }

    println!("############################################################################################");
    for line in &tiles {
        for c in line {
            print!("{c}");
        }
        println!();
    }
    top_index = 0;
    for i in 0..tiles.len() {
        for j in 0..tiles.len() {
            //Loop through each of the columns to find where distance to top is
            if tiles[j][i] == 'O' {
                sum += tiles.len() - j;
            }
        }
        top_index = 0;
    }

    println!("Sum {:?}", sum);


    return tiles;
}

fn main() {
    let lines_result = reading_file::read_entire::<String>("src\\day14.txt");
    let lines = lines_result.expect("Found Error");
    println!("{:?}", part1(lines.clone()));
    println!("{:?}", part2(lines));
}

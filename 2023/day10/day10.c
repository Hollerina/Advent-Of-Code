#include<stdio.h>
#include<stdlib.h>
#include<string.h>

#define MAGIC_NUMBER 140

enum bool {
    TRUE,
    FALSE
};
enum DIRECTION {
    UP, DOWN, LEFT, RIGHT
};
enum DIRECTION map(char tile, enum DIRECTION from) {
    switch (tile) {
        case '|':
            if (from == DOWN) {
                return DOWN;
            }
            else {
                return UP;
            }
        case '-': 
            if (from == RIGHT) {
                return RIGHT;
            }
            else {
                return LEFT;
            }
        case 'L':
            if (from == DOWN) {
                return RIGHT;
            }
            else {
                return UP;
            }
        case 'J':
            if (from == DOWN) {
                return LEFT;
            }
            else {
                return UP;
            }
        case '7':
            if (from == UP) {
                return LEFT;
            }
            else {
                return DOWN;
            }
        case 'F':
            if (from == UP) {
                return RIGHT;
            }
            else {
                return DOWN;
            }
    }
    return DOWN;
}

int part1(char pipes[][MAGIC_NUMBER], int position[]){
    int steps = 1;
    enum DIRECTION prev_Step;
    enum bool found_start = FALSE;
    enum bool found = FALSE;
    enum DIRECTION dir;

    while (found_start == FALSE) {
        if(pipes[position[0] - 1][position[1]] == '|' || pipes[position[0] - 1][position[1]] == '7' || pipes[position[0] - 1][position[1]] == 'F'){
            //Then the index of position should move to up one and then can use these values to determine where to go
            position[0] = position[0] - 1;
            position[1] = position[1];
            prev_Step = UP ;
            found_start  = TRUE;
        } 
        else if(pipes[position[0]][position[1] + 1] == '-' || pipes[position[0]][position[1] + 1] == '7' || pipes[position[0]][position[1] + 1] == 'J'){
            position[0] = position[0];
            position[1] = position[1] + 1;
            prev_Step = RIGHT;
            found_start  = TRUE;
        }
        else if(pipes[position[0] +  1][position[1]] == '|' || pipes[position[0] + 1][position[1]] == 'L' || pipes[position[0] + 1][position[1]] == 'J'){
            position[0] = position[0] + 1;
            position[1] = position[1];
            prev_Step = DOWN;
            found_start  = TRUE;
        }
        else{
            position[0] = position[0];
            position[1] = position[1] - 1;
            prev_Step = LEFT;
            found_start  = TRUE;       
        }
    }

    //Now using the position before can determine which element to look right up or down
    //Array of arrays holding the movements for each char
    while(found == FALSE){
        dir = map(pipes[position[0]][position[1]], prev_Step);
        switch (dir) {
        case UP:
            position[0] = position[0] - 1;
            position[1] = position[1];
            prev_Step = UP ;
            break;
        case DOWN:
            position[0] = position[0] + 1;
            position[1] = position[1];
            prev_Step = DOWN;
            break;
        case RIGHT:
            position[0] = position[0];
            position[1] = position[1] + 1;
            prev_Step = RIGHT;
            break;
        case LEFT:
            position[0] = position[0];
            position[1] = position[1] - 1;
            prev_Step = LEFT;
            break;
        }
        steps += 1;

        if(pipes[position[0]][position[1]] == 'S'){
            found = TRUE;
        }
    }
    return steps/2;
}

int part2(char pipes[][MAGIC_NUMBER], int position[]){
    //Add to array storing all the steps of the array
    int path[13298][2];
    int start_end[140][2] = {0};

    //Add the starting position to the array
    path[0][0] = position[0];
    path[0][1] = position[1];

    //At index of pos[0] and pos[1];
    start_end[position[0]][0] = position[1];
    start_end[position[0]][1] = position[1];



    enum DIRECTION prev_Step;
    enum bool found_start = FALSE;
    enum bool found = FALSE;
    enum DIRECTION dir;

    while (found_start == FALSE) {
        if(pipes[position[0] - 1][position[1]] == '|' || pipes[position[0] - 1][position[1]] == '7' || pipes[position[0] - 1][position[1]] == 'F'){
            //Then the index of position should move to up one and then can use these values to determine where to go
            position[0] = position[0] - 1;
            position[1] = position[1];
            prev_Step = UP ;
            found_start  = TRUE;
        } 
        else if(pipes[position[0]][position[1] + 1] == '-' || pipes[position[0]][position[1] + 1] == '7' || pipes[position[0]][position[1] + 1] == 'J'){
            position[0] = position[0];
            position[1] = position[1] + 1;
            prev_Step = RIGHT;
            found_start  = TRUE;
        }
        else if(pipes[position[0] +  1][position[1]] == '|' || pipes[position[0] + 1][position[1]] == 'L' || pipes[position[0] + 1][position[1]] == 'J'){
            position[0] = position[0] + 1;
            position[1] = position[1];
            prev_Step = DOWN;
            found_start  = TRUE;
        }
        else{
            position[0] = position[0];
            position[1] = position[1] - 1;
            prev_Step = LEFT;
            found_start  = TRUE;       
        }
    }

    //ADD the next element in walk found from the starting position
    path[1][0] = position[0];
    path[1][1] = position[1];

    //Add this value depending on where
    if(start_end[position[0]][0] == 0){
        start_end[position[0]][0] =  position[1];
    }
    else if(position[1] < start_end[position[0]][0]) {
        start_end[position[0]][0] = position[1];
    }

    if(start_end[position[0]][1] == 0){
        start_end[position[0]][1] =  position[1];
    }
    else if(position[1] > start_end[position[0]][1]) {
        start_end[position[0]][1] = position[1];
    }


    int index = 2;

    //Find the walk through the pipe
    while(found == FALSE){
        dir = map(pipes[position[0]][position[1]], prev_Step);
        switch (dir) {
        case UP:
            position[0] = position[0] - 1;
            position[1] = position[1];
            prev_Step = UP ;
            break;
        case DOWN:
            position[0] = position[0] + 1;
            position[1] = position[1];
            prev_Step = DOWN;
            break;
        case RIGHT:
            position[0] = position[0];
            position[1] = position[1] + 1;
            prev_Step = RIGHT;
            break;
        case LEFT:
            position[0] = position[0];
            position[1] = position[1] - 1;
            prev_Step = LEFT;
            break;
        }

        if(start_end[position[0]][0] == 0){
            start_end[position[0]][0] =  position[1];
        }

        if(position[1] < start_end[position[0]][0]){
            start_end[position[0]][0] =  position[1];
        }
        else if(position[1] > start_end[position[0]][1]){
            start_end[position[0]][1] = position[1];
        }


        if(pipes[position[0]][position[1]] == 'S'){
            found = TRUE;
        }
        else{
            
            //Add the walk to the path array
            path[index][0] = position[0];
            path[index][1] = position[1];
            index += 1;
        }

    }

    enum bool found_path = FALSE;

    //Using the loop , loop through pipes and convert any square which isn't in the loop to a *
    for(int i = 0; i < MAGIC_NUMBER; i++){
        
        for(int j = 0; j < MAGIC_NUMBER; j++){
            //check if in path
            for(int k = 0; k < 13298; k++){
                if(i == path[k][0] && j == path[k][1]){
                    found_path = TRUE;
                    break;
                }
            }

            //If found_path is true then it is path and doesn't need to be changed
            if(found_path != TRUE){
                pipes[i][j] = '*';
            }
            found_path = FALSE;
        }
    }
    //Loop through the new array and if come across * then can path_crossing
    int val = 0;
    int current[2];
    int contained = 0;
    int loop_counting = 0;


    for(int i = 0; i < MAGIC_NUMBER; i++){
        for(int j = start_end[i][0] + 1; j < start_end[i][1]; j++){
            //If * call function
            
            if(pipes[i][j] == '*'){
                current[0] = i;
                current[1] = j;
                val = path_crossing(pipes, current);

                if(val == 1){
                    contained += 1;
                }
            }
        }
    }

    return contained;
}

int path_crossing(char pipes[][MAGIC_NUMBER], int position[]){
    char prev = '\0';
    int count_left = 0;
    int count_right = 0;



    for(int j = position[1] - 1; j > 0; j--){
        if(pipes[position[0]][j] != '*' && pipes[position[0]][j] != '-'){
            if(prev == '\0'){
                prev = pipes[position[0]][j];
                count_left += 1;
            }
            else{
                if(prev == '7' && pipes[position[0]][j] == 'F'){
                    //add to count as not a proper wall
                    count_left += 1;
                    prev = pipes[position[0]][j];
                }
                else if(prev == 'J' && pipes[position[0]][j] == 'L'){
                    count_left += 1;
                    prev = pipes[position[0]][j];
                }
                else if(prev == 'J' && pipes[position[0]][j] == 'F'){
                    prev = pipes[position[0]][j];
                }
                else if(prev == '7' && pipes[position[0]][j] == 'L'){
                    prev = pipes[position[0]][j];
                }
                else{
                    count_left += 1;
                    prev = pipes[position[0]][j];
                }
            }
        }
    }

    prev = '\0';

    for(int j = position[1] + 1; j < MAGIC_NUMBER; j++){
        if(pipes[position[0]][j] != '*' && pipes[position[0]][j] != '-'){
            if(prev == '\0'){
                prev = pipes[position[0]][j];
                count_right += 1;
            }
            else{
                if(prev == 'F' && pipes[position[0]][j] == '7'){
                    //add to count as not a proper wall
                    count_right += 1;
                    prev = pipes[position[0]][j];
                }
                else if(prev == 'L' && pipes[position[0]][j] == 'J'){
                    count_right += 1;
                    prev = pipes[position[0]][j];
                }
                else if(prev == 'F' && pipes[position[0]][j] == 'J'){
                    prev = pipes[position[0]][j];
                }
                else if(prev == 'L' && pipes[position[0]][j] == '7'){
                    prev = pipes[position[0]][j];
                }
                else{
                    count_right += 1;
                    prev = pipes[position[0]][j];
                }
            }
        }
    }


    if(count_left%2 == 0 || count_right%2 == 0){
        return 0;
    }
    return 1;
}

int main(){
    FILE *fptr;
    fptr = fopen("day10.txt", "r");
    char string_line[500];
    char pipes[MAGIC_NUMBER][MAGIC_NUMBER];
    int start[2];

 

    for(int i = 0; i < MAGIC_NUMBER; i++) {
        for(int j = 0; j < MAGIC_NUMBER; j++) {
             
            fscanf(fptr, " %c", &pipes[i][j]);
            // printf("%c %c" , pipes[i], pipes[j]);
            if(pipes[i][j] == 'S'){
                start[0] = i;
                start[1] = j;
            }
        }
    }
    fclose(fptr);


    printf("\n%s %d" ,"Part1 ", part1(pipes, start));
    printf("\n%s %d" ,"Part2 ", part2(pipes, start));

    // fflush(stdout); 
    return 0;
}
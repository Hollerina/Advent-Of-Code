#include<stdio.h>
#include<stdlib.h>
#include<string.h>

//Create String type from char*
typedef char* STRING;

int part1(int nums[], int size) {
    int* differences = malloc(sizeof(int) * size);
    int zeroCount = 0;

    //Find the differences of each element starting at index 1 working way to the array size
    //Count how many times 0 occurs too if the count is equal to size of array then return 0 otherwise return last element in array + call
    for(int i = 1; i < size; i++) {
        differences[i - 1] = nums[i] - nums[i-1];
        // printf("%d ", differences[i - 1 ]);
        if(differences[i - 1] == 0){
            zeroCount++;
        }
    }
    if(zeroCount == size - 1){
        free(differences);
        return 0;

    }
    int  value = differences[size - 2] + part1(differences, size - 1);
    return value;
}

int part2(int nums[], int size){
    int* differences = malloc(sizeof(int) * size);
    int zeroCount = 0;

    for(int i = 1; i < size; i++){
        differences[i - 1] = nums[i] - nums[i-1];
        // printf("%d ", differences[i - 1 ]);
        if(differences[i - 1] == 0){
            zeroCount++;
        }
    }

    if(zeroCount == size - 1){
        free(differences);
        return 0;

    }
    int  value = differences[0] - part2(differences, size - 1);
    return value;
}

int main() {
    FILE *fptr;
    fptr = fopen("day9.txt", "r");
    char string_line[500];
    int sum = 0; 
    int calc = 0;

    while(fgets(string_line, 500 , fptr)) {
        char* split_string = strtok(string_line, " ");
        int nums[21];
        int i = 0;

        while(split_string != NULL){
            nums[i] = atoi(split_string);
            split_string = strtok(NULL, " ");
            i++;
        }
        sum += (nums[20] + part1(nums, 21));
        calc += (nums[0] - part2(nums, 21));
    }      
    fclose(fptr);

    printf("%s %d", "Part 1:" ,sum);
    printf("\n\n");
    printf("%s %d", "Part 2:" ,calc);
    
    return 0;
}
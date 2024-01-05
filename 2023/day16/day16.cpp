#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <unordered_map>
#include <queue>

using namespace std;

vector<vector<int>> energized;
enum direction {
    right,
    up,
    down,
    left
};
struct Coord {
    int x;
    int y;
    direction d;
};

vector<Coord> energy;

int part1(vector<vector<char>> grid, direction direc, int row_start , int col_start) {

    energized.clear();
    energy.clear();
    
    // cout << " direc " << direc << " row start " << row_start << " col start " << col_start << endl;

    direction dir = direc;
    bool incomplete = true;
    bool edge_found = false;
    int prev_row = 0;
    int prev_col = 0;
    direction prev_dir;
    int row = row_start;
    int col = col_start;
    queue <Coord> queue;

    while(incomplete) {
        //Add the element to the array of energized
        
        bool found = false;
        bool prev_found = false;

        for (int j =0; j < energy.size(); j++) {
            if (energy[j].x == row && energy[j].y == col && energy[j].d == dir) {
                found = true;
            }
        }

        //If not in array then add to energized
        if (!found) {
            // energized.push_back({row, col});
            Coord c = {row, col , dir};
            energy.push_back(c);

        }
        else {
            found = false;
            prev_found = true;
        } 

        prev_col = col ;
        prev_row = row;
        prev_dir = dir;


        if (dir == direction::right && !edge_found) {
            //Find what type of element it is
            if (grid[row][col] == '\\') {
                dir = direction::down;
                if (row == grid.size() - 1) {
                    //Hit an edge
                    edge_found = true;
                }
                else {
                    row += 1;
                }          
            }
            else if (grid[row][col] == '/') {
                dir = direction::up;
                if (row == 0) {
                    edge_found = true;
                }
                else {
                    row -= 1;
                } 
            }
            else if (grid[row][col] == '|') {
                if (row == 0) {
                    //only send downwards
                    dir = direction::down;
                    row += 1;
                }
                else if (row == grid.size() -1) {
                    dir = direction::up;
                    row -= 1;
                }
                else {
                    dir = direction::down;
                    row += 1;
                    Coord c = {
                        row - 2, col, up
                    };
                    queue.push(c);
                }
            }
            else {
                if (col == grid[row].size() - 1) {
                    edge_found = true;
                }
                else {
                    col += 1;
                }
            }
        }
        else if (dir == direction::down && !edge_found) {

            //If going down + to row
            if (grid[row][col] == '\\') {
                dir = direction::right;
                if (col == grid[row].size() - 1) {
                    //Hit an edge
                    edge_found = true;
                }
                else {
                    col += 1;
                }  
            }
            else if (grid[row][col] == '/') {
                dir = direction::left;
                if (col == 0) {
                    edge_found = true;
                }
                else {
                    col -= 1;
                } 
            }
            else if (grid[row][col] == '-') {
                if (col == 0) {
                    //only send downwards
                    dir = direction::right;
                    col += 1;
                }
                else if (col == grid[row].size() - 1) {
                    dir = direction::left;
                    col -= 1;
                }
                else {
                    dir = direction::right;
                    col += 1;
                    Coord c = {
                        row, col - 2, direction::left
                    };
                    queue.push(c);
                }
            }
            else {
                if (row == grid.size() -1 ) {
                    edge_found = true;
                }
                else {
                    row += 1;
                }
            }
        }
        else if (dir == direction::left && !edge_found) {
            //Find what type of element it is
            if (grid[row][col] == '\\') {
                dir = direction::up;
                if (row == 0) {
                    //Hit an edge
                    edge_found = true;
                }
                else {
                    row -= 1;
                }          
            }
            else if (grid[row][col] == '/') {
                dir = direction::down;
                if (row == grid.size() - 1) {
                    edge_found = true;
                }
                else {
                    row += 1;
                } 
            }
            else if (grid[row][col] == '|') {
                if (row == 0) {
                    //only send downwards
                    dir = direction::down;
                    row += 1;
                }
                else if (row == grid.size() - 1) {
                    dir = direction::up;
                    row -= 1;
                }
                else {
                    dir = direction::down;
                    row += 1;
                    Coord c = {
                        row - 2, col, up
                    };
                    queue.push(c);
                }
            }
            else {
                if (col == 0) {
                    edge_found = true;
                }
                else {
                    col -= 1;
                }
            }
        }
        else if (dir == direction::up && !edge_found) {

            //If going down + to row
            if (grid[row][col] == '\\') {
                dir = direction::left;
                if (col == 0) {
                    //Hit an edge
                    edge_found = true;
                }
                else {
                    col -= 1;
                }  
            }
            else if (grid[row][col] == '/') {
                dir = direction::right;
                if (col == grid[row].size() - 1) {
                    edge_found = true;
                }
                else {
                    col += 1;
                } 
            }
            else if (grid[row][col] == '-') {
                if (col == 0) {
                    //only send downwards
                    dir = direction::right;
                    col += 1;
                }
                else if (col == grid[row].size() - 1) {
                    dir = direction::left;
                    col -= 1;
                }
                else {
                    dir = direction::right;
                    col += 1;
                    Coord c = {
                        row, col - 2, direction::left
                    };
                    queue.push(c);
                }
            }
            else {
                if (row == 0) {
                    edge_found = true;
                }
                else {
                    row -= 1;
                }
            }
        }

        if (edge_found || prev_found) {
            // check if the queue is empty if it is set incomplete to false
            if (queue.size() == 0) {
                incomplete = false;
            }
            else{
                Coord next = queue.front();
                queue.pop();
                row = next.x;
                col = next.y;
                dir = next.d;
                edge_found = false;
            }
        }
    }

    for (Coord c : energy) {
        bool energy_found = false;

        for(int i = 0; i < energized.size(); i++) {
            if(energized[i][0] == c.x && energized[i][1] == c.y) {
                energy_found = true;
            }
        }

        if (!energy_found) {
            //add to energized
            energized.push_back({c.x, c.y});
        }
    }

    // cout << energized.size() << " size" << endl;

    return energized.size();
}

int part2(vector<vector<char>> grid) {
    //Send along the top and the bottom
    vector<int> values;
    int temp = 0;
    
    for(int i = 0; i < grid[0].size(); i++) {
        temp = part1(grid, direction::down, 0, i);
        values.push_back(temp);
        cout << "Part 1 " << temp << " i " << i << endl;
        temp = part1(grid, direction::up, grid[0].size() - 1, i);
        values.push_back(temp);
        cout << "Part 1 " << temp << " i " << i << endl;
    }

    for(int i = 0; i < grid.size(); i++) {
        temp = part1(grid, direction::right, i, 0);
        values.push_back(temp);
        cout << "Part 1 " << temp << " i " << i << endl;
        temp = part1(grid, direction::left, i, grid.size() - 1);
        values.push_back(temp);
        cout << "Part 1 " << temp << " i " << i << endl;
    }

    return *max_element(values.begin(), values.end());
}

int main() {
    ifstream file("day16.txt");
    string str; 
    vector<vector<char>> grid;
    vector<char> row;
    while (std::getline(file, str))
    {   
        for(char s: str) {
            row.push_back(s);
        }

        grid.push_back(row);
        row.clear();
    }



    cout << part1(grid, direction::right, 0 , 0) << endl;
    cout << part2(grid) << endl;
    return 0;
}
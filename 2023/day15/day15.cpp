#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <unordered_map>

using namespace std;

int part1(string conversion) {
    //For each char find the ascii conversion
    int curr = 0;

    for(int i = 0; i < conversion.length(); i++) {
        curr += int(conversion[i]);
        curr = curr * 17;
        curr = curr % 256;
    }

    return curr;
}

int part2(vector<string> elements) {
    unordered_map < int, vector<vector<string>> > hashmap;

    //For each element calculate hashed values up to char
    string temp = "";
    bool found = false;
    int index = 0;
    int box = 0;

    for(string el: elements){
        while(!found) {
            if (el[index] == '-' || el[index] == '=') {
                found = true;
                box = part1(temp);
                
            }
            else {
                temp += el[index];
            }
            index  += 1;
        }
        found = false;
        

        //Add to the correct place in hashmap
        if (hashmap.find(box) == hashmap.end()) {
            //Using index determine symbol (Will be at index - 1)
            //If not in hashmap already and its - then will do nothing so check for if =
            
            if (el[index - 1] == '=') {
                string char_el(1,el[index]);
                vector<vector<string>> temp2 {{temp , char_el}};
                hashmap.insert({box, temp2});
            }
        }
        else {
            if (el[index - 1] == '=') {
                //Check to see if this is already in the array
                string char_el(1,el[index]);
                bool added = false;
                for (int j = 0; j < hashmap[box].size(); j++) {
                    if (hashmap[box][j][0] == temp) {
                        hashmap[box][j][1] = char_el;
                        added = true;
                    }
                }
                if (!added) {
                    hashmap[box].push_back({temp , char_el});
                }
            }
            else {
                //Need to remove element
                for (int j = 0; j < hashmap[box].size(); j++) {
                    if (hashmap[box][j][0] == temp) {
                        hashmap[box].erase(hashmap[box].begin() + j);
                        break;
                    }
                }
            }
        }
        index = 0;
        temp.clear();
    }

    int summation = 0;
    for (auto const &pair: hashmap) {
        //Summation take the pair.first and add 1, loop through the pair.second (2D vector) and calc total
        for (int j = 0; j < pair.second.size(); j++) {
            summation += (pair.first + 1) * (j + 1) * stoi(pair.second[j][1]);
        }
    }  
    return summation;
}

int main() {

    ifstream ifs("day15.txt");
    string content( (istreambuf_iterator<char>(ifs) ),
                       (istreambuf_iterator<char>()    ) );

    vector<string> elements;
    int index = 0;
    string temp = "";

    while(content[index] != '\0') {
        if (content[index] == ',') {
            elements.push_back(temp);
            temp.clear();
        }
        else {
            temp += content[index];
        }
        index += 1;
    }

    elements.push_back(temp);

    int sum = 0;
    int sum2 = 0;

    for(string el : elements) {
        sum += part1(el);
    }

    sum2 = part2(elements);

    cout <<"Part 1: " << sum << endl;
    cout <<"Part 2: " << sum2 << endl;



    return 0;
}
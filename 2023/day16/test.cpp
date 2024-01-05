#include <iostream>
#include <vector>
#include <queue>

using namespace std;

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


int main() {
    std::cout << "Hello it works?" << endl;

    queue <Coord> queue;

    Coord c = {
        1, 2, up
    };

    queue.push(c);

    return 0;
}
from functools import reduce
import re

def part1(file):
    file = re.sub(' +', ' ', file).split("\n")
    times = list(map(int, file[0].split(": ")[1].split(" ")))
    distances = list(map(int, file[1].split(": ")[1].split(" ")))
    summation = 1

    for index in range(len(times)):
        summation *= reduce(lambda sum, j: sum + (1 if j > distances[index] else 0), quadratic(times[index]), 0)
        print(summation)
    return summation

def part2(file):
    file = re.sub(' +', ' ', file).split("\n")
    time = int(re.sub(' +', '', file[0].split(": ")[1]))
    distance = int(re.sub(' +', '', file[1].split(": ")[1]))

    print(time)
    print(distance)
    print(quadratic(time))

    return reduce(lambda sum, j: sum + (1 if j > distance else 0), quadratic(time), 0)

def quadratic(time):
    values = []
    for i in range(time + 1):
        values.append( -(i**2) + time * i)
    return values


def main():
    file = open("day6.txt","r").read()
    print("Part 1: " + str(part1(file)))
    print("Part 2: " + str(part2(file)))

if __name__ == "__main__":
    main()
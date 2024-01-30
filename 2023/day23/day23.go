package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"math"
	"slices"
	"strings"
)

type coord struct {
	x int
	y int
}

type stackElm struct {
	x   int
	y   int
	dis int
}

var grid []string

func part1() int {
	//Create an array holding the coords of the elements to be looked at
	var currPath []coord = make([]coord, 1)
	currPath[0].x = 0
	currPath[0].y = 1
	nextCoord := coord{x: 1, y: 1}
	currPath = append(currPath, nextCoord)

	//Need a slice which holds slices of coords
	var paths [][]coord = make([][]coord, 1)
	paths[0] = currPath

	//Slice holding the coords been too
	var visited []coord = make([]coord, 1)
	visited[0] = currPath[0]
	// visited = append(visited, coord{x: 1, y: 1})

	var lengths []int

	directions := [][]int{{0, 1}, {1, 0}, {0, -1}, {-1, 0}}

	var firstFound = false
	var firstEl = true
	var complete = false

	//Loop until paths is empty
	for !complete {
		if currPath[len(currPath)-1].x == len(grid)-1 && currPath[len(currPath)-1].y == len(grid)-2 && len(paths) == 0 {
			complete = true
			lengths = append(lengths, len(currPath)-1)
			break
		}

		//Determine if need to pop or continue with path the last element in path should be at coords len(grid) - 1 , len(grid) - 2
		if currPath[len(currPath)-1].x == len(grid)-1 && currPath[len(currPath)-1].y == len(grid)-2 {
			//Add to the array and pop from current path
			lengths = append(lengths, len(currPath)-1)
			currPath = paths[0]
			paths = paths[1:]
			visited = make([]coord, len(currPath))
			copy(visited, currPath)

		} else if firstEl {
			firstEl = false
			currPath = paths[0]
			paths = paths[1:]
		}

		var lastElem = currPath[len(currPath)-1]

		//If doesnt equal hashtag need to look at i + 1, i - 1, j + 1, j - 1
		for index, element := range directions {
			if grid[lastElem.x+element[0]][lastElem.y+element[1]] == '.' && !slices.Contains(visited, coord{x: lastElem.x + element[0], y: lastElem.y + element[1]}) {
				//If firstfound is false then set to true else need to add to the queue
				if !firstFound {
					nextCoord := coord{x: lastElem.x + element[0], y: lastElem.y + element[1]}
					currPath = append(currPath, nextCoord)
					firstFound = true
				} else {
					//Copy the currpath and add it onto paths
					tmp := make([]coord, len(currPath))
					copy(tmp, currPath[:len(currPath)-1])
					tmp[len(tmp)-1].x = lastElem.x + element[0]
					tmp[len(tmp)-1].y = lastElem.y + element[1]
					paths = append(paths, tmp)
				}

				visited = append(visited, coord{x: lastElem.x, y: lastElem.y})
			} else if grid[lastElem.x+element[0]][lastElem.y+element[1]] == '>' && index == 0 && !slices.Contains(visited, coord{x: lastElem.x + element[0], y: lastElem.y + element[1]}) {
				if !firstFound {
					nextCoord := coord{x: lastElem.x + element[0], y: lastElem.y + element[1]}
					currPath = append(currPath, nextCoord)
					firstFound = true
				} else {
					//Copy the currpath and add it onto paths
					tmp := make([]coord, len(currPath))
					copy(tmp, currPath[:len(currPath)-1])
					tmp[len(tmp)-1].x = lastElem.x + element[0]
					tmp[len(tmp)-1].y = lastElem.y + element[1]
					paths = append(paths, tmp)
				}

				visited = append(visited, coord{x: lastElem.x, y: lastElem.y})
			} else if grid[lastElem.x+element[0]][lastElem.y+element[1]] == '^' && index == 3 && !slices.Contains(visited, coord{x: lastElem.x + element[0], y: lastElem.y + element[1]}) {
				if !firstFound {
					nextCoord := coord{x: lastElem.x + element[0], y: lastElem.y + element[1]}
					currPath = append(currPath, nextCoord)
					firstFound = true
				} else {
					tmp := make([]coord, len(currPath))
					copy(tmp, currPath[:len(currPath)-1])
					tmp[len(tmp)-1].x = lastElem.x + element[0]
					tmp[len(tmp)-1].y = lastElem.y + element[1]
					paths = append(paths, tmp)
				}

				visited = append(visited, coord{x: lastElem.x, y: lastElem.y})
			} else if grid[lastElem.x+element[0]][lastElem.y+element[1]] == 'v' && index == 1 && !slices.Contains(visited, coord{x: lastElem.x + element[0], y: lastElem.y + element[1]}) {
				if !firstFound {
					nextCoord := coord{x: lastElem.x + element[0], y: lastElem.y + element[1]}
					currPath = append(currPath, nextCoord)
					firstFound = true
				} else {
					tmp := make([]coord, len(currPath))
					copy(tmp, currPath[:len(currPath)-1])
					tmp[len(tmp)-1].x = lastElem.x + element[0]
					tmp[len(tmp)-1].y = lastElem.y + element[1]
					paths = append(paths, tmp)
				}

				visited = append(visited, coord{x: lastElem.x, y: lastElem.y})
			} else if grid[lastElem.x+element[0]][lastElem.y+element[1]] == '<' && index == 2 && !slices.Contains(visited, coord{x: lastElem.x + element[0], y: lastElem.y + element[1]}) {
				if !firstFound {
					nextCoord := coord{x: lastElem.x + element[0], y: lastElem.y + element[1]}
					currPath = append(currPath, nextCoord)
					firstFound = true
				} else {
					tmp := make([]coord, len(currPath))
					copy(tmp, currPath[:len(currPath)-1])
					tmp[len(tmp)-1].x = lastElem.x + element[0]
					tmp[len(tmp)-1].y = lastElem.y + element[1]
					paths = append(paths, tmp)
				}

				visited = append(visited, coord{x: lastElem.x, y: lastElem.y})
			}
		}

		firstFound = false
	}

	return slices.Max(lengths)
}

var seenCoords []coord = make([]coord, 0)

func part2() int {
	//Create a slice holding the points to be looked at start, end, points with more than 2 directions to go
	var points []coord = make([]coord, 1)
	points[0].x = 0
	points[0].y = 1
	points = append(points, coord{x: len(grid) - 1, y: len(grid) - 2})

	for r, row := range grid {
		for c, character := range row {
			if character == '#' {
				continue
			}

			neighbors := 0

			directions := [][]int{{r - 1, c}, {r + 1, c}, {r, c - 1}, {r, c + 1}}

			for _, nextCoord := range directions {
				if nextCoord[0] >= 0 && nextCoord[0] < len(grid) && nextCoord[1] >= 0 && nextCoord[1] < len(grid) && grid[nextCoord[0]][nextCoord[1]] != '#' {
					neighbors += 1
				}
			}

			if neighbors >= 3 {
				points = append(points, coord{x: r, y: c})
			}
		}
	}

	graph := make(map[coord]map[coord]int)

	for _, point := range points {
		graph[point] = make(map[coord]int)
	}

	var seen []coord = make([]coord, 1)

	for _, stackEl := range points {
		var stack []stackElm = make([]stackElm, 1)
		stack[0].x = stackEl.x
		stack[0].y = stackEl.y
		stack[0].dis = 0
		seen = make([]coord, 1)
		seen[0].x = stackEl.x
		seen[0].y = stackEl.y

		for len(stack) > 0 {
			distance := stack[0].dis
			row := stack[0].x
			col := stack[0].y
			stack = stack[1:]

			if distance != 0 && contains(points, coord{x: row, y: col}) {
				graph[coord{x: stackEl.x, y: stackEl.y}][coord{x: row, y: col}] = distance
				continue
			}

			directions := [][]int{{0, 1}, {1, 0}, {0, -1}, {-1, 0}}
			for _, dir := range directions {
				nextRow := row + dir[0]
				nextCol := col + dir[1]

				if nextRow >= 0 && nextRow < len(grid) && nextCol >= 0 && nextCol < len(grid) && grid[nextRow][nextCol] != '#' && !contains(seen, coord{x: nextRow, y: nextCol}) {
					stack = append(stack, stackElm{x: nextRow, y: nextCol, dis: distance + 1})
					seen = append(seen, coord{x: nextRow, y: nextCol})
				}
			}
		}

	}
	return dfs(coord{x: 0, y: 1}, graph)
}

func contains(s []coord, elem coord) bool {
	for _, item := range s {
		if item == elem {
			return true
		}
	}
	return false
}

func dfs(point coord, graph map[coord]map[coord]int) int {
	if point.x == len(grid)-1 && point.y == len(grid)-2 {
		return 0
	}

	m := math.MinInt64

	seenCoords = append(seenCoords, point)
	for first, _ := range graph[point] {

		if !contains(seenCoords, first) {
			depthFirst := dfs(first, graph)
			if m < depthFirst+graph[point][first] {
				m = depthFirst + graph[point][first]
			}
		}
	}

	index := 0

	for i, element := range seenCoords {
		if element == point {
			index = i
			break
		}
	}

	seenCoords = deleteElement(seenCoords, index)

	return m
}

func deleteElement(slice []coord, index int) []coord {
	return append(slice[:index], slice[index+1:]...)
}

func main() {

	content, error := ioutil.ReadFile("day23.txt")
	// Check whether the 'error' is nil or not. If it
	//is not nil, then print the error and exit.
	if error != nil {
		log.Fatal(error)
	}

	str := string(content)
	grid = strings.Split(str, "\n")

	fmt.Printf("%d\n", part1())
	fmt.Printf("%d\n", part2())
}

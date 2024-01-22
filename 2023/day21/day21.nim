import strutils
import std/[sets, math]

const
    steps = 64

type
  Row = seq[char]
  Board = seq[Row]
  Posistions = seq[array[2,int]]
  Queues = seq[(int , int , int)]

proc part1(grid: Board, start: array[2,int]): int =
    #Array for storing positions for each step
    var currentPos: Posistions
    currentPos.add(start)
    var currentSet = toHashSet(currentPos)
    var count = 0
    var curr: array[2,int]
    currentPos.setLen(0)

    while count < steps:
        while len(currentSet) > 0:
            curr = currentSet.pop
            # For each up/down/left/right need to make sure not heading out of bounds
            if curr[0] > 0:
                if grid[curr[0] - 1][curr[1]] == '.':
                    # Add to the currentPos array
                    currentPos.add([curr[0] - 1, curr[1]])
            if curr[0] < high(grid):
                if grid[curr[0] + 1][curr[1]] == '.':
                    currentPos.add([curr[0] + 1, curr[1]])
            if curr[1] > 0:
                if grid[curr[0]][curr[1] - 1] == '.':
                    currentPos.add([curr[0], curr[1] - 1])
            if curr[1] < high(grid[0]):
                if grid[curr[0]][curr[1] + 1] == '.':
                    currentPos.add([curr[0], curr[1] + 1])       

        count += 1
        currentSet = toHashSet(currentPos)
        currentPos.setLen(0)

    return len(currentSet)

proc fill(startRow: int, startCol: int, startStep: int, grid:Board): int =
    var ans = initHashSet[(int, int)]()
    var seen = toHashSet([(startRow , startCol)])
    var queue: Queues
    queue.add((startRow, startCol, startStep))



    while len(queue) > 0:
        let values = queue[0]
        let row = values[0]
        let col = values[1]
        let steps = values[2]
        queue.delete(0)


        if steps mod 2 == 0:
            ans.incl((row, col))
            # ans = ans.union(toHashSet([(row, col)]))
        if steps == 0:
            continue

        for element in [(row + 1, col), (row - 1, col), (row, col + 1), (row, col - 1)]:
            if element[0] < 0 or element[0] >= len(grid) or element[1] < 0 or element[1] >= len(grid) or grid[element[0]][element[1]] == '#' or (element[0], element[1]) in seen:
                continue
            seen.incl((element[0], element[1]))
            # seen = seen.union(toHashSet([(element[0], element[1])]))
            queue.add((element[0], element[1] , steps - 1))


    return len(ans)

proc part2(grid: Board, start: array[2,int]): int =
    let size = high(grid) + 1
    let stepsNow = 26501365
    let gridWidth = stepsNow div size - 1

    let odd = (gridWidth div 2 * 2 + 1) ^ 2
    let even =((gridWidth + 1) div 2 * 2) ^ 2


    let oddPoints = fill(start[0] , start[1] , size * 2 + 1, grid)
    let evenPoints = fill(start[0] , start[1] , size * 2, grid)

    let diamondTop = fill(size - 1 , start[1] , size - 1, grid)
    let diamondRight = fill(start[0], 0 , size - 1, grid)
    let diamondBottom = fill(0 , start[1], size - 1, grid)
    let diamondLeft = fill(start[1], size - 1, size - 1, grid)

    #Int he diamond still small and large top and bottom
    let smallTopRight = fill(size - 1 , 0 , size div 2 - 1, grid)
    let smallTopLeft = fill(size - 1 , size - 1 , size div 2 - 1, grid)
    let smallBottomRight = fill(0 , 0 , size div 2 - 1, grid)
    let smallBottomLeft = fill(0 , size - 1, size div 2 - 1, grid)

    let bigTopRight = fill(size - 1, 0, size * 3 div 2 - 1, grid)
    let bigTopLeft = fill(size - 1, size - 1, size * 3 div 2 - 1, grid)
    let bigBottomRight = fill(0, 0, size * 3 div 2 - 1, grid)
    let bigBottomLeft = fill(0, size - 1, size * 3 div 2 - 1, grid)

    return odd * oddPoints + even * evenPoints + diamondTop  + diamondRight + diamondBottom + diamondLeft + (gridWidth  + 1) * (smallTopRight + smallTopLeft + smallBottomLeft + smallBottomRight) + gridWidth * (bigTopRight + bigTopLeft + bigBottomLeft + bigBottomRight)

proc main() =
    let entireFile = readFile("day21.txt")
    let lineArr = entireFile.split("\r\n")
    var input: Board
    var startingPos: array[2, int]
    
    for element in lineArr:
        input.add(cast[seq[char]](element))

    # record start posistion and change to *
    for i in 0..high(input):
        for j in 0..high(input[i]):
            if input[i][j] == 'S':
                startingPos[0] = i
                startingPos[1] = j
                input[i][j] = '.'

    echo part1(input, startingPos)

    echo part2(input, startingPos)

main()
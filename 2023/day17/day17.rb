#Very slow
require 'set'

State = Struct.new(:heatLoss, :row, :col, :rowCount , :colCount, :count)

def part1(grid)
    #Create a priority queue which is an array holding states. To determine what to bring out we need to find the mins of heatLoss
    pq = []
    
    #Starting state where heat loss is 0 and nothing has moved
    start = State.new(0,0,0,0,0,0)
    pq.push(start)
    #Nodes that have been visited
    visited = Set[]

    while pq.length() > 0 
        pq , currState = minHeatLoss(pq)
        puts [currState.heatLoss , currState.row, currState.col, currState.rowCount, currState.colCount, currState.count].join(" ")

        #If at the bottom left corner of the grid then the shortest path has been found
        if currState.row == grid.length() - 1 && currState.col == grid[0].length() - 1 
            return currState.heatLoss
        end

        #Check to see if this node has already been visited 
        if visited.include? [currState.row, currState.col, currState.rowCount, currState.colCount, currState.count]
            next
        end
        visited.add([currState.row, currState.col, currState.rowCount, currState.colCount, currState.count])

        #Need to make sure that count is less than 3 otherwise not valid and make sure not at the start
        if currState.count < 3 && [currState.row, currState.col] != [0,0]
            #Can continue going in the current direction
            nextRow = currState.row + currState.rowCount
            nextCol = currState.col + currState.colCount

            if (nextRow >= 0 && nextRow < grid.length()) && (nextCol >= 0 && nextCol < grid[0].length())
                newState = State.new(currState.heatLoss + grid[nextRow][nextCol].to_i,nextRow,nextCol, currState.rowCount , currState.colCount, currState.count + 1)
                pq.push(newState)
            end
        end

        for nextDirRow, nextDirCol in [[0, 1], [1, 0], [0, -1], [-1, 0]]
            #Checking to see if not the direction been and not going back on ourselves
            if [nextDirRow, nextDirCol] != [currState.rowCount, currState.colCount] && [nextDirRow, nextDirCol] != [-currState.rowCount, -currState.colCount]
                nextRow = currState.row + nextDirRow
                nextCol = currState.col + nextDirCol

                #Add the the queue if a possible way to go
                if (nextRow >= 0 && nextRow < grid.length()) && (nextCol >= 0 && nextCol < grid[0].length())
                    newState = State.new(currState.heatLoss + grid[nextRow][nextCol].to_i,nextRow,nextCol, nextDirRow , nextDirCol,  1)
                    pq.push(newState)
                end
            end
        end

        
    end

    # minHeatLoss(pq)

    return 0
end

def part2(grid)
    #Create a priority queue which is an array holding states. To determine what to bring out we need to find the mins of heatLoss
    pq = []
    
    #Starting state where heat loss is 0 and nothing has moved
    start = State.new(0,0,0,0,0,0)
    pq.push(start)
    #Nodes that have been visited
    visited = Set[]

    while pq.length() > 0 
        currState = pq.shift()
        puts [currState.heatLoss , currState.row, currState.col, currState.rowCount, currState.colCount, currState.count].join(" ")

        #If at the bottom left corner of the grid then the shortest path has been found
        if currState.row == grid.length() - 1 && currState.col == grid[0].length() - 1 && currState.count >= 4
            return currState.heatLoss
        end

        #Check to see if this node has already been visited 
        if visited.include? [currState.row, currState.col, currState.rowCount, currState.colCount, currState.count]
            next
        end
        visited.add([currState.row, currState.col, currState.rowCount, currState.colCount, currState.count])

        #Need to make sure that count is less than 3 otherwise not valid and make sure not at the start
        if currState.count <= 10 && [currState.row, currState.col] != [0,0]
            #Can continue going in the current direction
            nextRow = currState.row + currState.rowCount
            nextCol = currState.col + currState.colCount

            if (nextRow >= 0 && nextRow < grid.length()) && (nextCol >= 0 && nextCol < grid[0].length())
                newState = State.new(currState.heatLoss + grid[nextRow][nextCol].to_i,nextRow,nextCol, currState.rowCount , currState.colCount, currState.count + 1)
                pq.push(newState)
            end
        end

        if currState.count > 3 || [currState.row, currState.col] == [0,0]
            for nextDirRow, nextDirCol in [[0, 1], [1, 0], [0, -1], [-1, 0]]
                #Checking to see if not the direction been and not going back on ourselves
                if [nextDirRow, nextDirCol] != [currState.rowCount, currState.colCount] && [nextDirRow, nextDirCol] != [-currState.rowCount, -currState.colCount]
                    nextRow = currState.row + nextDirRow
                    nextCol = currState.col + nextDirCol

                    #Add the the queue if a possible way to go
                    if (nextRow >= 0 && nextRow < grid.length()) && (nextCol >= 0 && nextCol < grid[0].length())
                        newState = State.new(currState.heatLoss + grid[nextRow][nextCol].to_i,nextRow,nextCol, nextDirRow , nextDirCol,  1)
                        pq.push(newState)
                    end
                end
            end
        end

        pq = pq.sort_by{ |curState| [curState.heatLoss, curState.row, curState.col] }
    end

    # minHeatLoss(pq)

    return 0
end

def minHeatLoss(pq) 
    #Find the mins of pq and return the state with it popped off the array as well as the new array
    minIndex = 0

    minVal = pq[0].heatLoss


    for index in 0..pq.length() - 1
        if minVal > pq[index].heatLoss
            minVal = pq[index].heatLoss
            minIndex = index
        elsif minVal == pq[index].heatLoss
            if pq[minIndex].row > pq[index].row
                minVal = pq[index].heatLoss
                minIndex = index
            elsif pq[minIndex].row == pq[index].row
                if pq[minIndex].col > pq[index].col
                    minVal = pq[index].heatLoss
                    minIndex = index
                end
            end
        end
    end

    minState = pq.delete_at(minIndex)

    return pq , minState
end

def main () 
    file = File.open("day17.txt")
    file_data = file.readlines.map(&:chomp)
    gird = []
    output = 0;

    grid = file_data.map(&:chars)

    output = part2(grid)
    puts output
end

main()
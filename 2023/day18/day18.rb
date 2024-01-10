#Using Picks theorm and Shoelace Formula
def part1(instructions)
    #array to hold all the points, starting wiht [0,0] being the starting point
    points = [[0,0]]
    #Create a dictionary corresponding to all possible moves , such as R = moving one column to left represent by [0,-1]
    directions = {
        "U" => [-1,0],
        "D" =>  [1,0],
        "R" =>  [0,1],
        "L" => [0,-1]
    }
    #The shoelace formula uses Boundary points (the outer of the polygon)
    boundaryPoint = 0

    for i in 0..instructions.length() - 1
        dir , steps , _ = instructions[i].split(" ")
        rowMove, colMove = directions[dir]
        boundaryPoint += steps.to_i
        #Taking the last point added (as the moves will be onto this point)
        row , col = points[points.length() - 1]
        #Add the point to the array which is after the movemnet will be
        points.push([row + rowMove * steps.to_i, col + colMove * steps.to_i])
    end

    #Using Picks theorm find the inner area of the polygon
    area = 0
    for i in 0..points.length() - 1
        area += points[i][0] * (points[i-1][1] - points[(i + 1) % points.length][1])
    end
    area = (area).abs.div(2)

    innerArea = area - (boundaryPoint.div(2)) + 1
    
    return innerArea + boundaryPoint
end

def part2(instructions)
    #Convert to hex and then same as part1
    points = [[0,0]]
    directions = {
        "U" => [-1,0],
        "D" =>  [1,0],
        "R" =>  [0,1],
        "L" => [0,-1]
    }
    conversion = {
        "0" => "R",
        "1" => "D",
        "2" => "L",
        "3" => "U"
    }
    boundaryPoint = 0

    for i in 0..instructions.length() - 1
        _x , _y , hexString = instructions[i].split(" ")
        hexString = hexString[2..-1]
        hexString = hexString[0...-1]
        dir = hexString[hexString.length() - 1]
        steps = hexString[0...-1].hex

        rowMove, colMove = directions[conversion[dir]]
        boundaryPoint += steps.to_i
        #Taking the last point added (as the moves will be onto this point)
        row , col = points[points.length() - 1]
        #Add the point to the array which is after the movemnet will be
        points.push([row + rowMove * steps.to_i, col + colMove * steps.to_i])
    end

    area = 0
    for i in 0..points.length() - 1
        area += points[i][0] * (points[i-1][1] - points[(i + 1) % points.length][1])
    end
    area = (area).abs.div(2)

    innerArea = area - (boundaryPoint.div(2)) + 1

    return innerArea + boundaryPoint
end

def main()
    file = File.open("day18.txt")
    lines = file.readlines.map(&:chomp)

    puts part1(lines)
    puts part2(lines)
end

main()
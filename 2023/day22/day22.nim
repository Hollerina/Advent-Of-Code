import strutils
import sequtils
import sets
import algorithm

type
    Line = seq[int]
    Rows = seq[Line]
    Dic = seq[HashSet[int]]

proc intersection(a, b: seq[int]): bool =
    return max(a[0], b[0]) <= min(a[3], b[3]) and max(a[1], b[1]) <= min(a[4], b[4])

proc zSort(a, b: Line): int =
    cmp(a[2], b[2])

proc part1(bricks: var Rows): int =
    #For each brick in bricks need to determine how far it can fall down
    for index, brick in bricks:
        #The max Z for every intial value is 1 as can't be at zero
        var maxZ = 1
        #Looking at all bricks below current brick need to check if any intersection occurs in the x, y coords
        for i in 0..index - 1:
            if intersection(brick, bricks[i]):
                #They overlap and therefore can't be in the same z value
                maxZ = max(maxZ, bricks[i][5] + 1)

        #Need to update Z value
        
        bricks[index][5] -= bricks[index][2] - maxZ
        bricks[index][2] = maxZ

    #Sort based on Z again the z values now indicate the fallen blocks
    bricks = bricks.sorted(zSort)

    var keySupportVal: Dic
    var valSupportKey: Dic

    for i in 0..len(bricks) - 1:
        keySupportVal.add(initHashSet[int]())
        valSupportKey.add(initHashSet[int]())

    #Add to the key and val support of supporting bricks
    #Can be tested by looking at each brick and all bricks below it seeing if they overlap and comparing the z vals seing if a new layer
    for i, brick in bricks:
        for j  in 0..i - 1:
            if intersection(brick, bricks[j]) and brick[2] == bricks[j][5] + 1:
                keySupportVal[j].incl(i)
                valSupportKey[i].incl(j)


    var total = 0

    for index, key in keySupportVal:
        var tracker = 0
        for i in key:
            if len(valSupportKey[i]) >= 2:
                tracker += 1
        if tracker == len(key):
            total += 1

    #Part2 Find the bricks which have only one support and then find how many they are supporting
    var total2 = 0

    for i in 0..len(bricks) - 1:
        var queue: Line

        for elm in keySupportVal[i]:
            if len(valSupportKey[elm]) == 1:
                queue.add(elm)

        var fallen = toHashSet(queue)
        fallen.incl(i)

        while len(queue) > 0:
            let curr = queue[0]
            queue.delete(0)

            for k in keySupportVal[curr] - fallen:
                if valSupportKey[k] <= fallen:
                    queue.add(k)
                    fallen.incl(k)

        total2 += len(fallen) - 1

    echo total2
    return total

proc main() =
    let entireFile = readFile("day22.txt")
    let lineArr = entireFile.split("\r\n")
    var lines: Rows

    for element in lineArr:
        lines.add(element.replace("~" , ",").split(",").map(parseInt))

    lines = lines.sorted(zSort)
    echo part1(lines)
main()
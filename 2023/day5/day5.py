def part1(file):
    #Split on empty new line to get seeds, soil, fertilizer, water, light, temp, humidity, location.
    parts = file.split("\n\n")
    seeds = parts[0].split(": ")
    seeds = list(map(int, seeds[1].split(" ")))
    #For loop for len(parts) as that loops through each map starting at 1 
    for i in range(1,len(parts)):
        maps = parts[i].split(":\n")
        maps = maps[1].split("\n")
        seeds = mapping(seeds, maps)

    return seeds

def part2(file):
    parts = file.split("\n\n")
    seeds = parts[0].split(": ")
    ranges = list(map(int, seeds[1].split(" ")))
    seeds = []
    for i in range(len(ranges)):
        if i%2 == 1:
            seeds.append([ranges[i - 1], ranges[i-1] + ranges[i]])

    #Find mapping sets
    for i in range(1,len(parts)):
        maps = parts[i].split(":\n")
        maps = maps[1].split("\n")
        seeds = mapping_sets(seeds, maps)

    return seeds


def mapping(seeds, maps):
    #For each seed find the mapping
    for i in range(len(seeds)):
        #Check each seed against each mapping
        for map in maps:
            #Split map into an int array
            elements = map.split(" ")
            if seeds[i] >= int(elements[1]) and seeds[i] <= (int(elements[1]) + int(elements[2])):
                #map the seed and break
                seeds[i] = int(elements[0]) + (seeds[i] - int(elements[1]))
                break

    return seeds

def mapping_sets(seeds, maps):
    output = []
    map_length = len(maps)
    map_count = 0

    while len(seeds) > 0:
        for map_ in maps:  
            elements = list(map(int, map_.split(" ")))
            map_count += 1
            #If starting elements are included then two cases of end is included or not.
            if seeds[0][0] >= elements[1] and seeds[0][0] <= (elements[1] + elements[2] - 1):
                #Push the mapped elements
                if(seeds[0][1] > (elements[1] + elements[2]) -1):
                    #Create a new set at seeds[0]
                    output.append([(elements[0] + (seeds[0][0] - elements[1])), (elements[0] + elements[2]) - 1])
                    #Reset seeds[0] to be the set of unmapped seeds
                    seeds.append([(elements[1] + elements[2]), seeds[0][1]])
                    seeds.pop(0)
                    break
                else:
                    output.append([(elements[0] + (seeds[0][0] - elements[1])), (elements[0] + (seeds[0][1] - elements[1]))])
                    seeds.pop(0)
                    break
            elif seeds[0][1] >= elements[1] and seeds[0][1] <= (elements[1] + elements[2] - 1):
                #Push the array and reset seeds[0]
                output.append([elements[0], (elements[0] + (seeds[0][1] - elements[1]))])
                seeds.append([seeds[0][0], elements[1] - 1])
                seeds.pop(0)
                break
            elif elements[1] > seeds[0][0] and elements[1] < seeds[0][1]:
                #The values are in middle and need to add two elements into the array
                output.append([elements[0], (elements[0] + elements[2]) - 1])
                #back values
                seeds.append([(elements[1] + elements[2]), seeds[0][1]])
                seeds.append([seeds[0][0], elements[1] - 1])
                seeds.pop(0)
                break

            if map_count == map_length: 
                output.append([seeds[0][0], seeds[0][1]])
                seeds.pop(0)
          
        map_count = 0

    return output


def main():
    file = open("day5.txt","r").read()
    print(min(part1(file)))
    print(min(min(part2(file))))

if __name__ == "__main__":
    main()
stored = Dict()

function part1(line, vals)
    if length(line) == 0 
        ##These values match thus a valid input and return 1
        if length(vals) == 0
            return 1
        else
            return 0
        end
    end
    if length(vals) == 0
        ##If there is a # still left in line but no value in vals then the match is invalid    
        if contains(line, "#")
            return 0
        else 
            return 1
        end
    end

    result = 0

    ##Checking if the line would be a valid input
    if contains(".?", line[1])
        #If it is then assume to be a dot and slice first element off and recursively call part1() again
        result += part1(chop(line, head = 1, tail = 0), vals)
    end

    if contains("#?", line[1])
        #Check for the value we are looking at is less than the current passed string
        #If we chop the string using the current value make sure it doenst contain > only # and ? are allowed
        #Check if vals[1] is equal in legnth to current string (this means that will be last set of active springs)
        #Or if its not equal in length then the index which comes after vals[1] isnt a #. If it is then this means that there will be too many active springs
        if vals[1] <= length(line) && !contains(chop(line, head = 0, tail = length(line)-vals[1]), ".") && (vals[1] == length(line) || line[vals[1] + 1] != '#')
            result += part1(chop(line, head = vals[1] +1, tail = 0 ), view(collect(vals), 2:length(vals)))
        end
    end
    return result
end

function part2(line, vals)
    if length(line) == 0 
        if length(vals) == 0
            return 1
        else
            return 0
        end
    end
    if length(vals) == 0
        if contains(line, "#")
            return 0
        else 
            return 1
        end
    end

    #If it is already in stored then can just returnt that
    if haskey(stored, (line,vals))
        return stored[(line,vals)]
    end
    
    result = 0

    if contains(".?", line[1])
        result += part2(chop(line, head = 1, tail = 0), vals)
    end

    if contains("#?", line[1])
        if vals[1] <= length(line) && !contains(chop(line, head = 0, tail = length(line)-vals[1]), ".") && (vals[1] == length(line) || line[vals[1] + 1] != '#')
            result += part2(chop(line, head = vals[1] +1, tail = 0 ), view(collect(vals), 2:length(vals)))
        end
    end

    ##Add result onto the dictionary stored
    stored[(line,vals)] = result

    return result
end

function main()
    s = []
    open("day12.txt") do f
        s = readlines(f) 
    end
    sum = 0
    sum2 = 0
    valv = 0
    valv2 = 0
    input = ""


    for i in eachindex(s)
        parts = split(s[i], " ")
        values = Tuple(map(val -> parse(Int, val), split(parts[2], ",")))
        valv = part1(parts[1], values)
        sum += valv
    end

    for i in eachindex(s)
        parts = split(s[i], " ")
        values = Tuple(repeat(map(val -> parse(Int, val), split(parts[2], ",")), 5))

        for j in 1:5
            if j >= 2
                input *= "?"
            end
            input *= parts[1]
        end
        valv2 = part2(input, values)
        sum2 += valv2
        input = ""
    end

    println(sum)
    println(sum2)
end

main()
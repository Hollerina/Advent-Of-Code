local io = require "io"

function part1(ratings)
    --All start at the rating called "in"
    local sum = 0

    for index, rating in ipairs(ratings) do
        --For every rating we need to start with the dictionary in
        local complete = false
        local location = "in"
        local accepted = {}

        while not complete do
                --Starting at "in"
            for i , instruct in ipairs(workflow[location]) do
                if string.find(instruct, ":") then
                    --Need to split on : here and then split on < or >
                    local splits = mysplit(instruct, ":")
                    --splits at index 2 contains the address should send too if match the expression
                    if string.find(splits[1], "<") then
                        local equality = mysplit(splits[1], "<")
                        --Check if it satisfy the equality if it doesnt then move onto the next element in the array
                        if tonumber(rating[equality[1]]) < tonumber(equality[2]) then
                            --Need to send to the correct destination if it is A/R then need to break and add to array else set the new location to be splits[2]
                            if splits[2] == "A" then
                                sum = sum + findValue(rating)
                                complete = true
                                location = "in"
                                break
                            elseif splits[2] == "R" then
                                complete = true
                                location = "in"
                                break
                            else
                                location = splits[2]
                                break
                            end
                        end
                    elseif string.find(splits[1], ">") then
                        local equality = mysplit(splits[1], ">")
                        if tonumber(rating[equality[1]]) > tonumber(equality[2]) then
                            if splits[2] == "A" then
                                sum = sum + findValue(rating)
                                complete = true
                                location = "in"
                                break
                            elseif splits[2] == "R" then
                                complete = true
                                location = "in"
                                break
                            else
                                location = splits[2]
                                break
                            end
                        end
                    end
                else
                    if instruct == "A" then
                        sum = sum + findValue(rating)
                        complete = true
                        location = "in"
                        break
                    elseif instruct == "R" then
                        complete = true
                        location = "in"
                        break
                    else
                        location = instruct
                        break
                    end
                end
            end
        end
    end
    return sum
end

function part2()
    --create a dictionary to hold "X" : [1,4000] "M" : "[1,4000]" "A" : [1,4000] "S" : [1:4000]
    local startingSet = {}
    startingSet["x"] = {1,4000}
    startingSet["m"] = {1,4000}
    startingSet["a"] = {1,4000}
    startingSet["s"] = {1,4000}
    local setCollection = {}
    local setLength = 1
    
    
    --Using starting set and starting at location="in" find all posibiliteis that can occure

    return FindingSets(startingSet, "in")

end

function FindingSets(ranges, location)
    if location == "R" then
        return 0
    end
    if location == "A" then
        local product = 1
        product = product * (ranges["x"][2] - ranges["x"][1] + 1) * (ranges["m"][2] - ranges["m"][1] + 1) * (ranges["a"][2] - ranges["a"][1] + 1) * (ranges["s"][2] - ranges["s"][1] + 1)
        return product
    end

    local total = 0
    local found = false
    local trueVals
    local falseVals

    for index, rule in ipairs(workflow[location]) do
        --split each rule if has ":"
        if string.find(rule, ":") then
            rule = mysplit(rule, ":")
            local target = rule[2]
            local comparitor = ""
            if string.find(rule[1], ">") then
                comparitor = ">"
            else
                comparitor = "<"
            end    
            rule = mysplit(rule[1], comparitor)

            local low = ranges[rule[1]][1]
            local high = ranges[rule[1]][2]

            if comparitor == "<" then
                trueVals = {low, math.min(tonumber(rule[2]) - 1 , high)}
                falseVals = {math.max(tonumber(rule[2]), low) , high}
            else
                trueVals = {math.max(tonumber(rule[2]) + 1, low) , high}
                falseVals = {low , math.min(tonumber(rule[2]), high)}
            end

            if trueVals[1] <= trueVals[2] then
                local copy = {}
                copy["x"] = {}
                copy["x"][1] = ranges["x"][1]
                copy["x"][2] = ranges["x"][2]
                copy["m"] = {}
                copy["m"][1] = ranges["m"][1]
                copy["m"][2] = ranges["m"][2]
                copy["a"] = {}
                copy["a"][1] = ranges["a"][1]
                copy["a"][2] = ranges["a"][2]
                copy["s"] = {}
                copy["s"][1] = ranges["s"][1]
                copy["s"][2] = ranges["s"][2]
                copy[rule[1]][1] =  trueVals[1]
                copy[rule[1]][2] =  trueVals[2]

                total = total + FindingSets(copy, target)
            end
            if falseVals[1] <= falseVals[2] then
                ranges["x"][1] = ranges["x"][1]
                ranges["x"][2] = ranges["x"][2]
                ranges["m"][1] = ranges["m"][1]
                ranges["m"][2] = ranges["m"][2]
                ranges["a"][1] = ranges["a"][1]
                ranges["a"][2] = ranges["a"][2]
                ranges["s"][1] = ranges["s"][1]
                ranges["s"][2] = ranges["s"][2]
                ranges[rule[1]][1] =  falseVals[1]
                ranges[rule[1]][2] =  falseVals[2]
            else
                found = true
                break
            end
        else
            if not found then
                total = total + FindingSets(ranges, rule)
            end
        end
    end
    return total

end

function findValue(arr, arrays)
    if arrays then
        return (arr["x"][2] - arr["x"][1]) + (arr["m"][2] - arr["m"][1]) + (arr["a"][2] - arr["a"][1]) + (arr["s"][2] - arr["s"][1])
    else
        return arr["x"] + arr["m"] + arr["a"] + arr["s"]
    end

    
end

function mysplit(inputstr, sep)
    if sep == nil then
            sep = "%s"
    end
    local t={}
    for str in string.gmatch(inputstr, "([^"..sep.."]+)") do
            table.insert(t, str)
    end
    return t
end

function main()
    workflow = {}
    local ratings = {}
    local info = {}
    local ratingDictionary = {}
    local instructions = {}
    local foundEmpty = false
    local rating_split = {}

    local file = io.open("day19.txt","r")
    if file == nil then
        return 0
    end
    for line in file:lines() do

        if line == ""
        then
            foundEmpty = true
        end

        if not foundEmpty and line ~= ""
        then
            info = mysplit(line, "{")
            instructions = mysplit(info[2]:sub(1,-2), ",")
            workflow[info[1]] = instructions
        elseif foundEmpty and line ~= ""
        then
            info = mysplit(line:sub(2):sub(1,-2), ",")
            for index, infomation in ipairs(info) do
                rating_split = mysplit(infomation, "=")
                ratingDictionary[rating_split[1]] = rating_split[2]
            end
            table.insert(ratings, ratingDictionary)
            ratingDictionary = {}         
        end
    end


    file:close()
    print("Part 1: " .. part1(ratings))
    print("Part 2: " .. part2())
end

main()
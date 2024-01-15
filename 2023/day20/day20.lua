function Part1(nodes, nodeKeys)
    local loop = false
    local allZero = true
    local counter = 0
    local highPulse = 0
    local lowPulse = 0


    while not loop  and  counter <= 999 do
        local pulses = ButtonPress(nodes)
        lowPulse = lowPulse + pulses[1]
        highPulse = highPulse + pulses[2]
        nodes = pulses[3]
        counter = counter + 1
        allZero = true


        for _ , key in ipairs(nodeKeys) do
            --Loop through each key if % the prevState all zero and if & then need to loop through prevConnections
            if string.sub(key, 1, 1) == "%" then
                -- print("key " .. key)
                --check to see if at nodes[key:sub(2)]["prevState"] == 0
                -- print("prev state: " .. nodes[key:sub(2)]["prevState"])
                if nodes[key:sub(2)]["prevState"] ~= 0 then
                    allZero = false
                    break
                end
            elseif string.sub(key, 1, 1) == "&" then
                for _i , state in ipairs(nodes[key:sub(2)]["prevConnections"]) do
                    if state[2] ~= 0 then
                        allZero = false
                        break
                    end
                end
                if not allZero then
                    break
                end
            end
        end

        if allZero then
            --Back to orginal state and loop complete 
            loop = true
        end
    end

    local multiple = 1000 / counter


    return multiple * lowPulse * multiple * highPulse

end

function Part2(nodes)
    local counter = 0
    local highPulse = 0
    local found = false
    local lowcommult
    local lowPulse = 0
    local conjunction = {}
    local conjunctionNames = {}

    for _ , key in ipairs(nodes["kl"]["prevConnections"]) do
        conjunction[key[1]] = 0
        table.insert(conjunctionNames, key[1])
    end


    while not found do
        local pulses = ButtonPress(nodes)
        lowPulse = lowPulse + pulses[1]
        highPulse = highPulse + pulses[2]
        nodes = pulses[3]
        counter = counter + 1
        local allZero = true

        if pulses[4] ~= "" then
            conjunction[pulses[4]] = counter
            print(counter)
        end

        --Check if conjuction isnt all 0
        local allFound = true

        for _ , key in ipairs(conjunctionNames) do
            if conjunction[key] == 0 then
                allFound = false
            end
        end

        lowcommult = conjunction[conjunctionNames[1]]

        if allFound then
            --Find lcm for the vals
            for i , key in ipairs(conjunctionNames) do
                if i ~= 0 then
                    lowcommult = lcm(lowcommult, conjunction[key])
                end
            end

            found = true
        end

    end

    return lowcommult
end

function gcd( m, n )
    while n ~= 0 do
        local q = m
        m = n
        n = q % n
    end
    return m
end

function lcm( m, n )
    return ( m ~= 0 and n ~= 0 ) and m * n / gcd( m, n ) or 0
end

function ButtonPress(nodes)
    --What happens to each of the buttons when the button is pressed
    --Queue will hold pulse and where too
    local queue = {}
    --Current holds the current actions being processed
    local current = {"low", "broadcaster", 0}
    local complete = false
    local low = 1
    local high = 0
    local keyFound = ""

    while not complete do
        if current[2] == "kl" and current[1] == "high" then
            --add to comparison array
            keyFound = current[3]
        end

        if nodes[current[2]] ~= nil then
            if current[2] == "broadcaster" then
                for _ , key in ipairs(nodes["broadcaster"]["connections"]) do
                    table.insert(queue, {"low", key, "broadcaster"})
                    low = low + 1
                end
            elseif nodes[current[2]]["prevState"] ~= nil then
                --Then in a flipper 
                if current[1] ~= "high" then
                    --Can send a current depening on prevstate
                    if nodes[current[2]]["prevState"] == 1 then
                        nodes[current[2]]["prevState"] = 0
                        for _ , key in ipairs(nodes[current[2]]["connections"]) do
                            table.insert(queue, {"low", key, current[2]})
                            low = low + 1
                        end
                    else
                        nodes[current[2]]["prevState"] = 1
                        for _ , key in ipairs(nodes[current[2]]["connections"]) do
                            table.insert(queue, {"high", key, current[2]})
                            high = high + 1
                        end
                    end
                end
            else
                --Find the connection in prevstate which has been passed through with current and update the value to be 1 or 0 depending on whats passed
                for _j , prevConnection in ipairs(nodes[current[2]]["prevConnections"]) do
                    if prevConnection[1] == current[3] then
                        --Switch the value
                        if current[1] == "low" then
                            nodes[current[2]]["prevConnections"][_j][2] = 0
                        else
                            nodes[current[2]]["prevConnections"][_j][2] = 1
                        end
                    end
                end
                local countSize = 0
                local allOneSize = 0
                --Check if they are all 1
                for j , prevConnection in  ipairs(nodes[current[2]]["prevConnections"]) do
                    if prevConnection[2] == 1 then
                        allOneSize = allOneSize + 1
                    end
                    countSize = countSize + 1
                end
                --If they are equal then send lwo for everyone
                if countSize == allOneSize then
                    for _ , key in ipairs(nodes[current[2]]["connections"]) do
                        table.insert(queue, {"low", key, current[2]})
                        low = low + 1
                    end
                else
                    for _ , key in ipairs(nodes[current[2]]["connections"]) do
                        table.insert(queue, {"high", key, current[2]})
                        high = high + 1
                    end
                end
            end
            if next(queue) == nil then
                complete = true
            else
                current = table.remove(queue, 1)
            end
        else
            if next(queue) == nil then
                complete = true
            else
                current = table.remove(queue, 1)
            end
        end
    end

    return  {low,high, nodes , keyFound}
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

function PrevConnect(nodeKeys, nodes, key)
    local connectionArr = {}
    for _ , val in ipairs(nodeKeys) do
        for _i , connection in ipairs(nodes[val:sub(2)]["connections"]) do
            if connection == key:sub(2) then

                table.insert(connectionArr, {val:sub(2), 0})
            end
        end
    end

    return connectionArr
end

function main()
    local nodes = {}
    local nodeKeys = {}
    local conjunKeys = {}
    local file = io.open("day20.txt","r")
    if file == nil then
        return 0
    end
    for line in file:lines() do
        local lineSplit = mysplit(line, "->")

        if lineSplit[1]:sub(1,-2) == "broadcaster" then
            local broad = {}
            broad["connections"] = mysplit(lineSplit[2] , ", ")
            nodes["broadcaster"] = broad
            table.insert(nodeKeys, "!broadcaster")
        elseif string.sub(lineSplit[1]:sub(1,-2), 1, 1) == "%" then
            local flipper = {}
            flipper["connections"] = mysplit(lineSplit[2] , ", ")
            flipper["prevState"] = 0
            nodes[string.sub(lineSplit[1], 2, #lineSplit[1] - 1)] = flipper
            table.insert(nodeKeys, lineSplit[1]:sub(1,-2))
        else
            local conjunction = {}
            conjunction["prevConnections"] = {}
            conjunction["connections"] = mysplit(lineSplit[2] , ", ")
            nodes[string.sub(lineSplit[1], 2, #lineSplit[1] - 1)] = conjunction
            table.insert(nodeKeys, lineSplit[1]:sub(1,-2))
            table.insert(conjunKeys, lineSplit[1]:sub(1,-2):sub(2))
        end
    end


    --To populate the prevconnections array in conjunctions loop through the dictionary and if key comes across containing & pass to find prevConnections
    for _ , key in ipairs(nodeKeys) do
        if string.sub(key, 1, 1) == "&" then
            nodes[key:sub(2)]["prevConnections"] = PrevConnect(nodeKeys , nodes, key)
        end
    end

    print(Part1(nodes, nodeKeys))
    print(string.format("%15.0f" , Part2(nodes)))
end

main()
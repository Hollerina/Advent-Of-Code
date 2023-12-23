function part1(tiles)
    galaxies = []
    sum = 0
    empty_rows = []
    empty_col = []
    count_row = 0
    count_col = 0

    #Find the placements of the # in the glaxey and push! to an array
    for i in eachindex(tiles)
        for j in eachindex(tiles[i])
            if tiles[i][j] == "#"
                push!(galaxies, [i,j])
            end
        end
    end

    copy_gal = copy(galaxies)
    popfirst!(copy_gal)
    empty_rows, empty_col = empties(tiles)

    for i in eachindex(galaxies)
        for j in eachindex(copy_gal)
            for row in empty_rows
                #Find how many values need to be added
                if galaxies[i][1] > copy_gal[j][1]
                    #Check if row is in between
                    if row > copy_gal[j][1] && row < galaxies[i][1]
                        count_row += 1
                    end
                else
                    if row > galaxies[i][1] && row < copy_gal[j][1]
                        count_row += 1
                    end
                end
            end

            for col in empty_col
                if galaxies[i][2] > copy_gal[j][2]
                    if col > copy_gal[j][2] && col < galaxies[i][2]
                        count_col += 1
                    end
                else
                    if col > galaxies[i][2] && col < copy_gal[j][2]
                        count_col += 1
                    end
                end
            end
            sum += abs(galaxies[i][1] - copy_gal[j][1]) + abs(galaxies[i][2] - copy_gal[j][2]) + count_col + count_row

            count_col = 0
            count_row = 0

        end
        if length(copy_gal) == 1
            break
        end
        popfirst!(copy_gal)
    end

    return sum
end

function part2(tiles)
    galaxies = []
    sum = 0
    empty_rows = []
    empty_col = []
    count_row = 0
    count_col = 0

    for i in eachindex(tiles)
        for j in eachindex(tiles[i])
            if tiles[i][j] == "#"
                push!(galaxies, [i,j])
            end
        end
    end

    copy_gal = copy(galaxies)
    popfirst!(copy_gal)
    empty_rows, empty_col = empties(tiles)

    for i in eachindex(galaxies)
        for j in eachindex(copy_gal)
            for row in empty_rows
                #Find how many values need to be added
                if galaxies[i][1] > copy_gal[j][1]
                    #Check if row is in between
                    if row > copy_gal[j][1] && row < galaxies[i][1]
                        count_row += 1
                    end
                else
                    if row > galaxies[i][1] && row < copy_gal[j][1]
                        count_row += 1
                    end
                end
            end

            for col in empty_col
                if galaxies[i][2] > copy_gal[j][2]
                    if col > copy_gal[j][2] && col < galaxies[i][2]
                        count_col += 1
                    end
                else
                    if col > galaxies[i][2] && col < copy_gal[j][2]
                        count_col += 1
                    end
                end
            end
            sum += abs(galaxies[i][1] - copy_gal[j][1]) + abs(galaxies[i][2] - copy_gal[j][2]) + (count_col * 999999) + (count_row * 999999)

            count_col = 0
            count_row = 0

        end
        if length(copy_gal) == 1
            break
        end
        popfirst!(copy_gal)
    end

    return sum

end

function empties(tiles)
    #Find the rows and columsnwhich are empty
    count_col = 0
    count_row = 0
    empty_rows = []
    empty_col = []
    for i in eachindex(tiles)
        for j in eachindex(tiles[i])
            if tiles[i][j] == "."
                count_row += 1
            end

            if tiles[j][i] == "."
                count_col += 1
            end
        end

        if count_row == length(tiles)
            push!(empty_rows, i)
        end

        if count_col == length(tiles)
            push!(empty_col, i)
        end

        count_col = 0
        count_row = 0
    end

    return empty_rows, empty_col

end

function main()
    s = []
    individual = []
    open("day11.txt") do f
        s = readlines(f) 
    end

    #Split each line into own array
    for i in eachindex(s)
        push!(individual, split(s[i], ""))
    end

    println(part1(individual))
    println(part2(individual))
end

main()
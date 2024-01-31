fs = require("fs")
function part1(lines) {
    let times = lines[0].split(": ")[1].split(" ").map(i => parseInt(i))
    let distances = lines[1].split(": ")[1].split(" ").map(i => parseInt(i))
    let product = 1

    for(let i = 0; i < times.length; i++) {
        product *= quadratic(times[i], distances[i])
    }
    return product
}

function part2(lines) {
    let time = parseInt(lines[0].split(": ")[1].replace(/ +/g,''))
    let distance = parseInt(lines[1].split(": ")[1].replace(/ +/g,''))
    return quadratic(time, distance)
}

function quadratic(time, distance) {
    let value = 0
    for(let i = 0; i < time + 1; i++) {
        if (-(Math.pow(i,2)) + time * i > distance)  {
            value += 1
        }
    }
    return value
}

function main() {
    let lines = fs.readFileSync('day6.txt', 'utf-8').replace(/ +/g,' ').split("\r\n");
    console.log(part1(lines))
    console.log(part2(lines))
}

main()
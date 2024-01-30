package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"math/big"
	"strconv"
	"strings"
)

type line struct {
	grad float32
	c    float32
}

var upper = 400000000000000
var lower = 200000000000000

func part1(hailstones [][]int) int {
	//For each line add to the equation slice for equation
	var equations []line = make([]line, 0)

	for _, hailstone := range hailstones {
		grad := float32(hailstone[4]) / float32(hailstone[3])
		constant := -1*grad*float32(hailstone[0]) + float32(hailstone[1])
		equations = append(equations, line{grad: grad, c: constant})
	}

	counter := 0

	for i := range equations {
		for j := range equations[i+1:] {
			newGrad := equations[i].grad - equations[i+1:][j].grad
			newC := equations[i+1:][j].c - equations[i].c
			xVal := newC / newGrad
			yVal := equations[i].grad*xVal + equations[i].c

			if ((hailstones[i][3] < 0 && xVal < float32(hailstones[i][0])) || (hailstones[i][3] > 0 && xVal > float32(hailstones[i][0]))) && ((hailstones[i][4] < 0 && yVal < float32(hailstones[i][1])) || (hailstones[i][4] > 0 && yVal > float32(hailstones[i][1]))) {
				if ((hailstones[i+1:][j][3] < 0 && xVal < float32(hailstones[i+1:][j][0])) || (hailstones[i+1:][j][3] > 0 && xVal > float32(hailstones[i+1:][j][0]))) && ((hailstones[i+1:][j][4] < 0 && yVal < float32(hailstones[i+1:][j][1])) || (hailstones[i+1:][j][4] > 0 && yVal > float32(hailstones[i+1:][j][1]))) {
					if xVal >= float32(lower) && xVal <= float32(upper) && yVal >= float32(lower) && yVal <= float32(upper) {
						counter += 1
					}
				}
			}
		}
	}

	return counter
}

func part2(hailstones [][]int) {
	val := gauss(mat(hailstones, 0, 1, 3, 4))
	val2 := gauss(mat(hailstones, 2, 1, 5, 4))
	res := big.NewRat(1, 1)
	res.Add(val[0][len(val[0])-1], val[1][len(val[1])-1])
	res.Add(res, val2[0][len(val2[0])-1])
	fmt.Printf("%v", res)
}

func mat(hailstones [][]int, x int, y int, dx int, dy int) [][]*big.Rat {
	var mapped [][]int = make([][]int, 0)
	//For every element create an array using the passed values
	for _, hailstone := range hailstones {
		mapped = append(mapped, []int{-hailstone[dy],
			hailstone[dx],
			hailstone[y],
			-hailstone[x],
			hailstone[y]*hailstone[dx] - hailstone[x]*hailstone[dy]})
	}
	//Taking the first 4 elements only add to a new array and map those into a new array
	lastElm := mapped[len(mapped)-1]
	mapped = mapped[:4]
	var output [][]*big.Rat = make([][]*big.Rat, 0)
	for _, m := range mapped {
		//For every element in m pair it with same index in lastElm and do big rat
		var currM []*big.Rat = make([]*big.Rat, 0)
		for i := range m {
			currM = append(currM, big.NewRat(int64(m[i])-int64(lastElm[i]), 1))
		}
		output = append(output, currM)
	}

	return output
}

func gauss(mapped [][]*big.Rat) [][]*big.Rat {
	for i := 0; i < len(mapped); i++ {
		t := mapped[i][i]
		for j, elm := range mapped[i] {
			res := big.NewRat(1, 1)
			res.Quo(elm, t)
			mapped[i][j] = res
		}
		for j := i + 1; j < len(mapped); j++ {
			t := mapped[j][i]
			for k, element := range mapped[j] {
				res := big.NewRat(1, 1)
				res.Mul(t, mapped[i][k])
				mult := big.NewRat(1, 1)
				mult.Sub(element, res)
				mapped[j][k] = mult
			}
		}
	}
	for i := len(mapped) - 1; i >= 0; i-- {
		for j := 0; j < i; j++ {
			t := mapped[j][i]
			for k, element := range mapped[j] {
				res := big.NewRat(1, 1)
				res.Mul(t, mapped[i][k])
				mult := big.NewRat(1, 1)
				mult.Sub(element, res)
				mapped[j][k] = mult
			}
		}
	}
	return mapped
}

func main() {
	content, error := ioutil.ReadFile("day24.txt")
	if error != nil {
		log.Fatal(error)
	}

	str := string(content)
	hailStonesStr := strings.Split(str, "\r\n")
	var hailstones = make([][]int, len(hailStonesStr))

	for j, hailstone := range hailStonesStr {
		separate := strings.Split(strings.Replace(hailstone, " @ ", ", ", 1), ", ")
		for i := range separate {
			value, err := strconv.Atoi(strings.Trim(separate[i], " "))
			if err == nil {
				hailstones[j] = append(hailstones[j], value)
			}
		}
	}
	//Split each row into its own slice where 6 elements
	fmt.Printf("%d\n", part1(hailstones))
	part2(hailstones)
}

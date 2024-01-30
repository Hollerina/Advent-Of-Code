# Advent-Of-Code-2023 :santa::christmas_tree:
For Advent of Code 2023 I have decided to test a variety of my programming langues and therefore my solutions will consist of various languages. Below is the Languages I have used so far:
- TypeScript <img width="17" height="17" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
- C# <img width="17" height="17" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
- Python <img width="17" height="17" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
- Java <img width="17" height="17" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
- C <img width="17" height="17" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
- Julia <img width="17" height="17" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-original.svg" />
- Rust <img width="17" height="17" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg" />
- C++ <img width="17" height="17" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
- Ruby <img width="17" height="17" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" />
- Lua <img width="17" height="17" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg" />
- Nim 👑
- Go <img width="17" height="17" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" />
<details closed >
  <summary>
    <h2>Day 1 :snowflake:</h2>
    <img width="20" height="20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />&nbsp;
    <h2><a href="https://github.com/Hollerina/Advent-Of-Code-2023/blob/658c449d9fbf7ea7c3e84fadd49ecf9703801fa5/day1/day1.ts">Code</a></h2>
  </summary>
<ul>
  <li>
    <b>Part 1:</b><br/>
    <b>&emsp;Input:</b><br/>
    <span>&emsp;&emsp;&emsp;List of strings containing numbers and characters. </span><br/>
    <b>&emsp;Task:</b><br/>
    <span>&emsp;&emsp;&emsp;For each element in the strings list find the first and last number to combine them to make a new number.</span><br/>
    <span>&emsp;&emsp;&emsp;Such as "wed3hgpt5" would form "35". Add all these values up to get output.</span><br/>
    <b>&emsp;Output:</b><br/>
    <span>&emsp;&emsp;&emsp;The summation of all the strings values.</span><br/>
    <b>&emsp;Soloution Overview:</b><br/>
    <span>&emsp;&emsp;&emsp;For each string in the list loop through each index and check if current index can be converted to number.</span><br/>
    <span>&emsp;&emsp;&emsp;Continue until the first and last numbers are found in the string. When found create new number and add to a running total.</span>
  </li>
  <li>
    <b>Part 2:</b><br/>
    <b>&emsp;Input:</b><br/>
    <span>&emsp;&emsp;&emsp;List of strings containing numbers and characters. </span><br/>
    <b>&emsp;Task:</b><br/>
    <span>&emsp;&emsp;&emsp;For each element in the strings list find the first and last number to combine them to make a new number.</span><br/>
    <span>&emsp;&emsp;&emsp;Where numbers may be represented in their numerical format or string format (7, "seven").</span><br/>
    <span>&emsp;&emsp;&emsp;Such as "twone4" would form "24". Add all these values up to get output.</span><br/>
    <b>&emsp;Output:</b><br/>
    <span>&emsp;&emsp;&emsp;The summation of all the strings values.</span><br/>
    <b>&emsp;Soloution Overview:</b><br/>
    <span>&emsp;&emsp;&emsp;For each string in the list loop through each index and check if current index can be converted to number.</span><br/>
    <span>&emsp;&emsp;&emsp;If it can't be converted then check if the current index character is same as any of the starting characters of the words for numbers.</span></br>
    <span>&emsp;&emsp;&emsp;If it matches any loop through each possibility for that character comparing each to the original string.</span></br>
    <span>&emsp;&emsp;&emsp;If a match is found then use the conversion hashmap to create the new number to be used in the summation.</span></br>
    <span>&emsp;&emsp;&emsp;Continue until the first and last numbers are found in the string. When found create new number and add to a running total.</span>
  </li>
</ul>
</details>
<details closed>
  <summary>
    <h2>Day 2: 🟥🟦🟩</h2>&nbsp;
    <img width="20" height="20" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />&nbsp;
    <h2><a href="https://github.com/Hollerina/Advent-Of-Code-2023/blob/658c449d9fbf7ea7c3e84fadd49ecf9703801fa5/day2/day2.ts">Code</a></h2>
  </summary>
  <ul>
    <li>
      <b>Part 1:</b><br/>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;List of games which include the sets played within each game.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;See if the games can be played with only allowing 12 red, 13 green and 14 blue cubes.</span><br/>
      <span>&emsp;&emsp;&emsp;Add up all the game IDs of the games that are possible.</span><br/>
      <b>&emsp;Output;</b></br>
      <span>&emsp;&emsp;&emsp;Summation of game IDs</span><br/>
      <b>&emsp;Solution Overview:</b></br>
      <span>&emsp;&emsp;&emsp;For each different game split the input up into the different sets given.</span><br/>
      <span>&emsp;&emsp;&emsp;For each element in the set find the maximum number it can be for that colour and compare to the value.</span><br/>
      <span>&emsp;&emsp;&emsp;If it is smaller than the value it can be then can add to count to show this set is valid.</span><br/>
      <span>&emsp;&emsp;&emsp;Check after each game loop through if all sets are valid. If they are add to the running total</span><br/>
    </li>
    <li>
      <b>Part 2:</b><br/>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;List of games which include the sets played within each game.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find the minimum number of cubes needed for each colour for the game to be played.</span><br/>
      <span>&emsp;&emsp;&emsp;Then multiply the 3 values together and add that value to the running sum.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;The summation of the multiplication of each set.</span><br/>
      <b>&emsp;Solution Overview:</b><br/>
      <span>&emsp;&emsp;&emsp;For each game, the min of each set is found by comparing each value to a hashmap containing the min values.</span><br/>
      <span>&emsp;&emsp;&emsp;Once the minimum for each value is found calculate the multiplication and add to the running total.</span><br/>
    </li>
  </ul>
</details>
<details closed>
  <summary>
    <h2>Day 3: 🚠</h2>&nbsp;
    <img width="23" height="23" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />&nbsp;
    <h2><a href="https://github.com/Hollerina/Advent-Of-Code-2023/tree/7101f646e9f85b5e4bc7c74ad995cb89692e93bf/day3">Code</a></h2>
  </summary>
  <ul>
    <li>
      <b>Part 1:</b></br>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;List of strings where each one contains either special characters/dots/numbers.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Add all the values together that are adjacent (diagonally, up/down, left/right) to special characters.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Summation of all adjacent numbers to symbols.</span><br/>
      <b>&emsp;Solution Overview:</b></br>
      <span>&emsp;&emsp;&emsp;To find the numbers needed to be added. The program finds positions of all special chars.</span><br/>
      <span>&emsp;&emsp;&emsp;Once they have all been found, each of the eight positions around it are checked.</span><br/>
      <span>&emsp;&emsp;&emsp;If a number is present in the positions around, the find number function is called.</span><br/>
      <span>&emsp;&emsp;&emsp;Once the number has been found it is added to the total.</span><br/>
      <b>Part 2:</b></br>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;List of strings where each one contains either special characters/dots/numbers.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find the gears which are represented by * and have two values adjacent.</span><br/>
      <span>&emsp;&emsp;&emsp;Using these values multiply them and add to running sum.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Summation of all multiplications of the two numbers adjacent to gear.</span><br/>
      <b>&emsp;Solution Overview:</b><br/>
      <span>&emsp;&emsp;&emsp;Using find special char array, find * gears. Then find the numbers around those gears and have a count.</span><br/>
      <span>&emsp;&emsp;&emsp;Count allows us to see if the requirement of two has been met. If it was met then can add it to the sum.</span><br/>
    </li>
  </ul>
</details>
<details closed>
  <summary>
    <h2>Day 4: 🔢</h2>&nbsp;
    <img width="23" height="23" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />&nbsp;
    <h2><a href="https://github.com/Hollerina/Advent-Of-Code-2023/tree/d65d143efbb8e7562312baef20d040231bfe1b47/day4">Code</a></h2>
  </summary>
  <ul>
    <li>
      <b>Part 1:</b></br>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;List of strings where each one represents the winning numbers and your numbers.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find numbers you won with and doubling score every time have win on card.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Summation of all the winnings.</span><br/>
      <b>&emsp;Solution Overview:</b><br/>
      <span>&emsp;&emsp;&emsp;Split the input of each line into winning numbers and your numbers.</span><br/>
      <span>&emsp;&emsp;&emsp;Using Contains check if your number is in winning number.</span><br/>
      <span>&emsp;&emsp;&emsp;If it is then add 1 if first value otherwise double score.</span><br/>
      <b>Part 2:</b><br/>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;List of strings where each one represents the winning numbers and your numbers.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find how many scratch cards there was.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Summation of number of scratch cards.</span><br/>
      <b>&emsp;Solution Overview:</b></br>
      <span>&emsp;&emsp;&emsp;Find the winning values in the scratch card. </span><br/>
      <span>&emsp;&emsp;&emsp;Build an array which will hold how many of that scratch card you won.</span><br/>
      <span>&emsp;&emsp;&emsp;Add up all the values in the array for each index.</span><br/>
    </li>
  </ul>
</details>
<details closed>
  <summary>
    <h2>Day 5: 🌱</h2>&nbsp;
    <img width="23" height="23" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />&nbsp;
    <h2><a href="https://github.com/Hollerina/Advent-Of-Code/tree/0e44c476329ebfb10974b3ccb89a50627b64f257/day5">Code</a></h2>
  </summary>
  <ul>
    <li>
      <b>Part 1:</b></br>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;Seeds along with the sets of mappings.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Compute the mappings on the set of seeds and find the min value.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Min seed plot.</span><br/>
      <b>&emsp;Solution Overview:</b></br>
      <span>&emsp;&emsp;&emsp;Have an array of seeds and an array of map sets.</span><br/>
      <span>&emsp;&emsp;&emsp;For each map set pass seeds and that map set to mappings.</span><br/>
      <span>&emsp;&emsp;&emsp;In mappings for each seed find the corresponding mapping.</span><br/>
      <span>&emsp;&emsp;&emsp;If no mapping is found then return just the orginal number.</span><br/>
      <span>&emsp;&emsp;&emsp;Continue until all mappings are complete.</span><br/>
      <b>Part 2:</b><br/>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;Seed ranges along with the sets of mappings.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Compute the mappings on the set of seeds and find the min value.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Min seed plot.</span><br/>
      <b>&emsp;Solution Overview:</b><br/>
      <span>&emsp;&emsp;&emsp;Create an array which will store the start and end point of ranges for the seeds.</span><br/>
      <span>&emsp;&emsp;&emsp;For each mapping type, call mapping_sets which passes through seeds array and map.</span><br/>
      <span>&emsp;&emsp;&emsp;For each seed range find the corresponding mapping.</span><br/>
      <span>&emsp;&emsp;&emsp;If the start and end are both included in mapping range then map the entire set.</span><br/>
      <span>&emsp;&emsp;&emsp;If only start and end are in range, find the mapped range and create a new seed range of unmapped.</span><br/>
      <span>&emsp;&emsp;&emsp;If the mapping range is inside the seed range, map these seeds and create two new seed ranges.</span><br/>
      <span>&emsp;&emsp;&emsp;Repeat until all seed range mappings are complete and then find the minimum.</span><br/>
    </li>
  </ul>
</details>
<details closed>
  <summary>
    <h2>Day 6: ⛵</h2>&nbsp;
    <img width="23" height="23" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />&nbsp;
    <h2><a href="https://github.com/Hollerina/Advent-Of-Code/tree/e863fb5bfbe163f8e9c26d387148ced650d73fc0/day6">Code</a></h2>
  </summary>
  <ul>
    <li>
      <b>Part 1:</b></br>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;Time and distances for each race.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Compute how many different ways the record can be beaten in the time limit.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Number of ways to beat record.</span><br/>
      <b>&emsp;Solution Overview:</b></br>
      <span>&emsp;&emsp;&emsp;Split the input into two arrays containing the time and distances.</span><br/>
      <span>&emsp;&emsp;&emsp;For each time compute, using quadratics, all the timings.</span><br/>
      <span>&emsp;&emsp;&emsp;Using reduce calculate how many elements are above the distance for that race.</span><br/>
      <b>Part 2:</b><br/>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;Time and distances for each race.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Compute how many different ways the record can be beaten in the time limit.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Number of ways to beat record.</span><br/>
      <b>&emsp;Solution Overview:</b><br/>
      <span>&emsp;&emsp;&emsp;Split intput into distance and time and trim numbers to create one number.</span><br/>
      <span>&emsp;&emsp;&emsp;Call quadratic using that number and then reduce output comparing to distance.</span><br/>
    </li>
  </ul>
</details>
<details closed>
  <summary>
    <h2>Day 7: 🐫</h2>&nbsp;
    <img width="23" height="23" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />&nbsp;
    <h2><a href="https://github.com/Hollerina/Advent-Of-Code/tree/203deac9503479865f52cbe58b3157cdcccdd410/day7">Code</a></h2>
  </summary>
  <ul>
    <li>
      <b>Part 1:</b></br>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;Poker hands with bets.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Compute winnings after ordering the hands.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Total winnings.</span><br/>
      <b>&emsp;Solution Overview:</b></br>
      <span>&emsp;&emsp;&emsp;For each hand transform into a set. Then using length determine the hand type.</span><br/>
      <span>&emsp;&emsp;&emsp;Call the sorting function with hand and the array of same type of hands.</span><br/>
      <span>&emsp;&emsp;&emsp;Sort based on highest first digit and if same move to next digit.</span><br/>
      <span>&emsp;&emsp;&emsp;Sumate the winnings and return the final output.</span><br/>
      <b>Part 2:</b><br/>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;Poker hands with bets.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Compute winnings after ordering the hands, with J being a joker (wild card).</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Total winnings.</span><br/>
      <b>&emsp;Solution Overview:</b><br/>
      <span>&emsp;&emsp;&emsp;Same as before, but this time count how many J occur. Using this determine the hand.</span><br/>
      <span>&emsp;&emsp;&emsp;Call sorting with the new knowledge that J is the worst card in deck.</span><br/>
      <span>&emsp;&emsp;&emsp;Summate the total winnings.</span><br/>
    </li>
  </ul>
</details>
<details closed>
  <summary>
    <h2>Day 8: 🗺️</h2>&nbsp;
    <img width="23" height="23" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />&nbsp;
    <h2><a href="https://github.com/Hollerina/Advent-Of-Code/tree/52f3236de71d5a29ca678e156bbacc23870c2516/day8">Code</a></h2>
  </summary>
  <ul>
    <li>
      <b>Part 1:</b></br>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;Directions and nodes.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Calculate the paths using the directions by starting at AAA and ending at ZZZ.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Number of steps taken.</span><br/>
      <b>&emsp;Solution Overview:</b></br>
      <span>&emsp;&emsp;&emsp;Split input into directions and create a hashmap for the nodes.</span><br/>
      <span>&emsp;&emsp;&emsp;Starting at AAA, follow the directions until ZZZ is found.</span><br/>
      <b>Part 2:</b><br/>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;Directions and nodes.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Calculate all paths from any node ending in A to corresponding node ending in Z.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Number of steps taken.</span><br/>
      <b>&emsp;Solution Overview:</b><br/>
      <span>&emsp;&emsp;&emsp;Same as before, however now need to find all nodes ending in A.</span><br/>
      <span>&emsp;&emsp;&emsp;Find the distance between each A and Z path and then find the LCM of all paths.</span><br/>
    </li>
  </ul>
</details>
<details closed>
  <summary>
    <h2>Day 9: 🏝️</h2>&nbsp;
    <img width="23" height="23" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />&nbsp;
    <h2><a href="https://github.com/Hollerina/Advent-Of-Code/tree/053240b484db5995a36eb81d8ad36a7fcbe545ba/day9">Code</a></h2>
  </summary>
  <ul>
    <li>
      <b>Part 1:</b></br>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;List of Sequences.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find the next value in the sequence.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Next number in Sequence.</span><br/>
      <b>&emsp;Solution Overview:</b></br>
      <span>&emsp;&emsp;&emsp;Recurrsively find the difference between the values in the array.</span><br/>
      <span>&emsp;&emsp;&emsp;When hit 0, go back up to find value to add to last to get the output.</span><br/>
      <b>Part 2:</b><br/>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;List of Sequences.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find the first value in the path before the given sequence.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Number in Sequence before first.</span><br/>
      <b>&emsp;Solution Overview:</b><br/>
      <span>&emsp;&emsp;&emsp;Same as before, recurrsively find the differnce between the values.</span><br/>
      <span>&emsp;&emsp;&emsp;When all 0, go back up and find the difference needed to be taken away from orginal first value.</span><br/>
    </li>
  </ul>
</details>
<details closed>
  <summary>
    <h2>Day 10: 🔩</h2>&nbsp;
    <img width="23" height="23" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />&nbsp;
    <h2><a href="https://github.com/Hollerina/Advent-Of-Code/tree/053240b484db5995a36eb81d8ad36a7fcbe545ba/day10">Code</a></h2>
  </summary>
  <ul>
    <li>
      <b>Part 1:</b></br>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;The maze containg pipes and empty spaces.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find what is the furtherst away pipe from the start.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Number of steps from start.</span><br/>
      <b>&emsp;Solution Overview:</b></br>
      <span>&emsp;&emsp;&emsp;Create an enum which will hold the directions for each char.</span><br/>
      <span>&emsp;&emsp;&emsp;Find the start and decide which direction to go in by comparing surronding elements.</span><br/>
      <span>&emsp;&emsp;&emsp;Once start of path found, use ENUM to walk through the entire path recording step count.</span><br/>
      <span>&emsp;&emsp;&emsp;Return step count / 2.</span><br/>
      <b>Part 2:</b><br/>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;The maze containg pipes and empty spaces.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find how many tiles are enclosed by the main loop.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Amount of tiles enclosed.</span><br/>
      <b>&emsp;Solution Overview:</b><br/>
      <span>&emsp;&emsp;&emsp;Find the coordinates of the main loop. Then using this turn any tile not in it to a *.</span><br/>
      <span>&emsp;&emsp;&emsp;Looping through the entire grid system, if it is * within the given range find if in loop.</span><br/>
      <span>&emsp;&emsp;&emsp;To do this count how many vertical walls the tile crosses to reach the edges on left and right.</span><br/>
      <span>&emsp;&emsp;&emsp;If one or both or even then the tile is outside the loop.</span><br/>
    </li>
  </ul>
</details>
<details closed>
  <summary>
    <h2>Day 11: 🌠</h2>&nbsp;
    <img width="23" height="23" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-original.svg" />&nbsp;
    <h2><a href="https://github.com/Hollerina/Advent-Of-Code/tree/4debdaa5adfdcf88a98c6b54513ecfb646d00aa8/day11">Code</a></h2>
  </summary>
  <ul>
    <li>
      <b>Part 1:</b></br>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;Dots to represent empty space, # representing galaxies.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find shortest distnace from each galaxey to others, noting if a row/col empty add another one.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Summation of all shortest distances from each galaxey to others.</span><br/>
      <b>&emsp;Solution Overview:</b></br>
      <span>&emsp;&emsp;&emsp;Start by finding the placement of the Galaxies and then find the col/row which are empty.</span><br/>
      <span>&emsp;&emsp;&emsp;Find the distance by counting steps horizontal then vertical.</span><br/>
      <span>&emsp;&emsp;&emsp;If one of the empty row/col is crossed add to the counter.</span><br/>
      <span>&emsp;&emsp;&emsp;Using counter can calculate actaul distance by. Widht + height + count.</span><br/>
      <b>Part 2:</b><br/>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;Dots to represent empty space, # representing galaxies.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find shortest distnace from each galaxey to others, noting if a row/col empty times by 1000000.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Summation of all shortest distances from each galaxey to others.</span><br/>
      <b>&emsp;Solution Overview:</b><br/>
      <span>&emsp;&emsp;&emsp;Proceed exactly as part one finding galaxies and emptys.</span><br/>
      <span>&emsp;&emsp;&emsp;Then calculate the shortest distnace for each. However multiply the count by 999999.</span><br/>
    </li>
  </ul>
</details>
<details closed>
  <summary>
    <h2>Day 12: ♨️</h2>&nbsp;
    <img width="23" height="23" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-original.svg" />&nbsp;
    <h2><a href="https://github.com/Hollerina/Advent-Of-Code/tree/4debdaa5adfdcf88a98c6b54513ecfb646d00aa8/day12">Code</a></h2>
  </summary>
  <ul>
    <li>
      <b>Part 1:</b></br>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;Each line representing which strings in order/not as well as uncertain springs.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find all the combinations the strings can be placed in the ? within it.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Summation of all the possibilites.</span><br/>
      <b>&emsp;Solution Overview:</b></br>
      <span>&emsp;&emsp;&emsp;Recurrsion is used to find all the possible approachs for the string.</span><br/>
      <span>&emsp;&emsp;&emsp;If the start of string is contained withn in ".?", function called again minsu first part of string.</span><br/>
      <span>&emsp;&emsp;&emsp;As well as checking if first part is in "#?" then string is validated agaisnt the number array.</span><br/>
      <span>&emsp;&emsp;&emsp;If valid then it is called again without the first number and the string is concatenated to be without that num.</span><br/>
      <span>&emsp;&emsp;&emsp;1 is returned if the string is empty as well as num array, it also returned when num array is empty and string contain no more #.</span><br/>
      <b>Part 2:</b><br/>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;Each line representing which strings in order/not as well as uncertain springs.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find all the combinations the strings can be placed in the ? within it. The input needs to be multipled by 5.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Summation of all the possibilites.</span><br/>
      <b>&emsp;Solution Overview:</b><br/>
      <span>&emsp;&emsp;&emsp;Using the same method as before but now storing the state in a dictionary.</span><br/>
      <span>&emsp;&emsp;&emsp;This allows for a sped up process as can jsut call state in the array than recalling recurssion again.</span><br/>
    </li>
  </ul>
</details>
<details closed>
  <summary>
    <h2>Day 13: (|)</h2>&nbsp;
    <img width="23" height="23" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg" />&nbsp;
    <h2><a href="https://github.com/Hollerina/Advent-Of-Code/tree/53f815737c75e51cff5c7909ef854c731c5b2eb3/2023/day13">Code</a></h2>
  </summary>
  <ul>
    <li>
      <b>Part 1:</b></br>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;Multiple grids of the . and #.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find the line of symmetry.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;The summation of all the lines of symmetrys.</span><br/>
      <b>&emsp;Solution Overview:</b></br>
      <span>&emsp;&emsp;&emsp;Begin by splitting the input into arrays for each grid and then each grid becomes char char array.</span><br/>
      <span>&emsp;&emsp;&emsp;Begin by searching for vertical line. For each possible index check if the grid is symmetrical.</span><br/>
      <span>&emsp;&emsp;&emsp;If no symmetry is found then continue onto the horrizontal search.</span><br/>
      <span>&emsp;&emsp;&emsp;Search each horrizontal index. Return the index and type of symmetry which was found.</span><br/>
      <b>Part 2:</b><br/>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;Multiple grids of the . and #.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find the new line of symmetry after finding the smudged char.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;The summation of all the lines of symmetrys.</span><br/>
      <b>&emsp;Solution Overview:</b><br/>
      <span>&emsp;&emsp;&emsp;Same as before but change a char to be . if # and # if . . </span><br/>
      <span>&emsp;&emsp;&emsp;Continue this reverting back to orginal grid if no new line of symmetry found with flipped value.</span><br/>
      <span>&emsp;&emsp;&emsp;Make sure that the line of symmetry isn't matching the previous line which was found.</span><br/>
    </li>
  </ul>
</details>
<details closed>
  <summary>
    <h2>Day 14: 🌕</h2>&nbsp;
    <img width="23" height="23" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg" />&nbsp;
    <h2><a href="https://github.com/Hollerina/Advent-Of-Code/tree/53f815737c75e51cff5c7909ef854c731c5b2eb3/2023/day14">Code</a></h2>
  </summary>
  <ul>
    <li>
      <b>Part 1:</b></br>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;Grid containing the placement of rocks.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find the value of hwo top heavy the grid is after a roll north.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Summation of all values from north heavy.</span><br/>
      <b>&emsp;Solution Overview:</b></br>
      <span>&emsp;&emsp;&emsp;Rocks represented by # won't move when the grid is rolled.</span><br/>
      <span>&emsp;&emsp;&emsp;For each column find the distance from the top most row and keeping note of new top.</span><br/>
      <span>&emsp;&emsp;&emsp;If find # then this becomes the new top as rocks can't roll beyond this.</span><br/>
      <span>&emsp;&emsp;&emsp;Otherwise the new top is just the old top - 1 for each rock found.</span><br/>
      <b>Part 2:</b><br/>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;Grid containing the placement of rocks.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find the 1000000000 cycle north heavy value.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Summation of all values from north heavy.</span><br/>
      <b>&emsp;Solution Overview:</b><br/>
      <span>&emsp;&emsp;&emsp;Begin by finding each cycle by spinning North, East ,South and West.</span><br/>
      <span>&emsp;&emsp;&emsp;Record each cycle in a hashmap storing the cycle number and the grid.</span><br/>
      <span>&emsp;&emsp;&emsp;Continue this process until a cycle is found. Using this cycle find the grid needed.</span><br/>
      <span>&emsp;&emsp;&emsp;Once the grid has been found then can calculate the north heavy value.</span><br/>
    </li>
  </ul>
</details>
<details closed>
  <summary>
    <h2>Day 15: 🌋</h2>&nbsp;
    <img width="23" height="23" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />&nbsp;
    <h2><a href="https://github.com/Hollerina/Advent-Of-Code/tree/7e702a48b507917de0f6fdd451e1f730f1052f18/2023/day15">Code</a></h2>
  </summary>
  <ul>
    <li>
      <b>Part 1:</b></br>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;String where each element is seperate via a comma.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find the summation of all the hashed values.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Summation of Hashed vals.</span><br/>
      <b>&emsp;Solution Overview:</b></br>
      <span>&emsp;&emsp;&emsp;Seperate the string on the commas. Then for each element convert each char to ASCII.</span><br/>
      <span>&emsp;&emsp;&emsp;For each char perform *17 and then mod 256. Continue untill all chars converted.</span><br/>
      <span>&emsp;&emsp;&emsp;Summate all the possible values.</span><br/>
      <b>Part 2:</b><br/>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;String where each element is seperate via a comma.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find the summation of lens power.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Summation of the lens powers from each of the boxes.</span><br/>
      <b>&emsp;Solution Overview:</b><br/>
      <span>&emsp;&emsp;&emsp;Find the hash of each value up to the special char using part1.</span><br/>
      <span>&emsp;&emsp;&emsp;The hash value tells us which box it belongs in and therefore which key in the hashmap.</span><br/>
      <span>&emsp;&emsp;&emsp;The special char will determine if need to add to the box or delete it.</span><br/>
      <span>&emsp;&emsp;&emsp;Process all the elements and then calculate the sum of lens for all at end.</span><br/>
    </li>
  </ul>
</details>
<details closed>
  <summary>
    <h2>Day 16: 🔦</h2>&nbsp;
    <img width="23" height="23" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />&nbsp;
    <h2><a href="https://github.com/Hollerina/Advent-Of-Code/tree/7e702a48b507917de0f6fdd451e1f730f1052f18/2023/day16">Code</a></h2>
  </summary>
  <ul>
    <li>
      <b>Part 1:</b></br>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;Grids containing where the mirrors and splitters are.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find how many of the squares will have had light pass through it.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Summation of the number of tiles lit.</span><br/>
      <b>&emsp;Solution Overview:</b></br>
      <span>&emsp;&emsp;&emsp;Start in top left corner and walk right. Where there is cases for each char.</span><br/>
      <span>&emsp;&emsp;&emsp;If the light happens to hit a splitter then store one value in a struct.</span><br/>
      <span>&emsp;&emsp;&emsp;Use the other to continue walking along light path till a wall is hit.</span><br/>
      <span>&emsp;&emsp;&emsp;If a wall is hit check if the next array is empty, if it is then algorithm complete.</span><br/>
      <b>Part 2:</b><br/>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;Grids containing where the mirrors and splitters are.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find the start position which produces most light covered tiles.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;The number of tiles which was the most of that grid.</span><br/>
      <b>&emsp;Solution Overview:</b><br/>
      <span>&emsp;&emsp;&emsp;Using part1 call for each different posistion.</span><br/>
      <span>&emsp;&emsp;&emsp;Store all values in a vector and then using this find the max.</span><br/>
    </li>
  </ul>
</details>
<details closed>
  <summary>
    <h2>Day 17: 🔥</h2>&nbsp;
    <img width="23" height="23" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" />&nbsp;
    <h2><a href="https://github.com/Hollerina/Advent-Of-Code/tree/7e702a48b507917de0f6fdd451e1f730f1052f18/2023/day17">Code</a></h2>
  </summary>
  <ul>
    <li>
      <b>Part 1:</b></br>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;Grid containing numbers representing the heatloss for that tile.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find the shortest path to end with the min heat loss.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;The min heat loss from the start to the end.</span><br/>
      <b>&emsp;Solution Overview:</b></br>
      <span>&emsp;&emsp;&emsp;Using Dikjstras, need to have a priority queue and a set of visited nodes.</span><br/>
      <span>&emsp;&emsp;&emsp;As there is a restriction on no more than 3 steps need to check step count.</span><br/>
      <span>&emsp;&emsp;&emsp;If less than 3 can send that way as well as sending the other ways around the tile.</span><br/>
      <span>&emsp;&emsp;&emsp;Continue until the priority queue is empty.</span><br/>
      <b>Part 2:</b><br/>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;Grid containing numbers representing the heatloss for that tile.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find the shortest path to end with the min heat loss.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;The min heat loss from the start to the end.</span><br/>
      <b>&emsp;Solution Overview:</b><br/>
      <span>&emsp;&emsp;&emsp;Same as before, but with restrictions of min 4 steps and max 10.</span><br/>
      <span>&emsp;&emsp;&emsp;Continue until smallest path has been found.</span><br/>
    </li>
  </ul>
</details>
<details closed>
  <summary>
    <h2>Day 18: 🕳️</h2>&nbsp;
    <img width="23" height="23" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" />&nbsp;
    <h2><a href="https://github.com/Hollerina/Advent-Of-Code/tree/7e702a48b507917de0f6fdd451e1f730f1052f18/2023/day18">Code</a></h2>
  </summary>
  <ul>
    <li>
      <b>Part 1:</b></br>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;List containg direction, step , hexcode.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find the area of the dig site by following directions of the list.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;The area of the dig site.</span><br/>
      <b>&emsp;Solution Overview:</b></br>
      <span>&emsp;&emsp;&emsp;For each line the direction is the first element and the second element is steps taken.</span><br/>
      <span>&emsp;&emsp;&emsp;To figure out the area of the shape we used two mathematical theorems.</span><br/>
      <span>&emsp;&emsp;&emsp;The first being <a href= "https://en.wikipedia.org/wiki/Pick%27s_theorem">Picks theorem</a> to find the area of the polygon.</span><br/>
      <span>&emsp;&emsp;&emsp;This alone will not give us the full area and will miss part of the outer tiles.</span><br/>
      <span>&emsp;&emsp;&emsp;Thus using the <a href="https://en.wikipedia.org/wiki/Shoelace_formula">Shoelace formula</a> can find the area of the inner border.</span><br/>
      <span>&emsp;&emsp;&emsp;The end result is inner area + boundary Points.</span><br/>
      <b>Part 2:</b><br/>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;List containg direction, step , hexcode.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find the area of the dig site by following directions of the list.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;The area of the dig site.</span><br/>
      <b>&emsp;Solution Overview:</b><br/>
      <span>&emsp;&emsp;&emsp;The hexcode is in fact the steps/direction we need. </span><br/>
      <span>&emsp;&emsp;&emsp;The first 5 chars of hex need to be hexed to find the step count and the last char is direction.</span><br/>
      <span>&emsp;&emsp;&emsp;Using the same method as before can find the total area.</span><br/>
    </li>
  </ul>
</details>
<details closed>
  <summary>
    <h2>Day 19: 🏭</h2>&nbsp;
    <img width="23" height="23" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg" />&nbsp;
    <h2><a href="https://github.com/Hollerina/Advent-Of-Code/blob/eec9e4ea0170ba38c7a0c23d40f011e49e5e707c/2023/day19">Code</a></h2>
  </summary>
  <ul>
    <li>
      <b>Part 1:</b></br>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;Workflows and Ratings.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Summation of all the accepted ratings.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Sum of the ratings.</span><br/>
      <b>&emsp;Solution Overview:</b></br>
      <span>&emsp;&emsp;&emsp;Starting at "in", loop through the instruction for each of the rating.</span><br/>
      <span>&emsp;&emsp;&emsp;For each rating determine which path should do down.</span><br/>
      <span>&emsp;&emsp;&emsp;Each workflow has a backup rule if it doesn't fit any of the first ones.</span><br/>
      <span>&emsp;&emsp;&emsp;Follow the path until A is reached or R. Adding to total sum if A.</span><br/>
      <b>Part 2:</b><br/>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;Workflows and Ratings.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find the summation of the sets that would be accepted for workflows ignoring ratings.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Summation of rating sets.</span><br/>
      <b>&emsp;Solution Overview:</b><br/>
      <span>&emsp;&emsp;&emsp;Follwing the same method as in part1, however now will have an upper and lower bound.</span><br/>
      <span>&emsp;&emsp;&emsp;Using recurssion, find the sets which will be accepted.</span><br/>
    </li>
  </ul>
</details>
<details closed>
  <summary>
    <h2>Day 20: 🔌</h2>&nbsp;
    <img width="23" height="23" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/lua/lua-original.svg" />&nbsp;
    <h2><a href="https://github.com/Hollerina/Advent-Of-Code/blob/eec9e4ea0170ba38c7a0c23d40f011e49e5e707c/2023/day20">Code</a></h2>
  </summary>
  <ul>
    <li>
      <b>Part 1:</b></br>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;Module Configuration.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find the pulse count of low and high at 1000 button presses.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Multiplication of low and high pulse count at 1000.</span><br/>
      <b>&emsp;Solution Overview:</b></br>
      <span>&emsp;&emsp;&emsp;Before begining the different time of structures were created.</span><br/>
      <span>&emsp;&emsp;&emsp;Each type all contained "connections" which held a table pointing to nodes it connected too.</span><br/>
      <span>&emsp;&emsp;&emsp;For flip flops, it held the previous state and when a low pulse would be sent to it this changes.</span><br/>
      <span>&emsp;&emsp;&emsp;Conjunctions hold "prevConnections" whihc is a table holding what nodes point to it as well as the state.</span><br/>
      <span>&emsp;&emsp;&emsp;For each button press create a queue of the instructions to be complete.</span><br/>
      <span>&emsp;&emsp;&emsp;Proceed until the queue is empty ,returing the pulse counts and the new nodes table.</span><br/>
      <span>&emsp;&emsp;&emsp;Continue until 1000 steps is reached or until a loop is formed.</span><br/>
      <b>Part 2:</b><br/>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;Module Configuration.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find how many steps it takes the reach a low pulse to the output "rx".</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Step count.</span><br/>
      <b>&emsp;Solution Overview:</b><br/>
      <span>&emsp;&emsp;&emsp;Using the same nodes table and button pressed function. As well as noticing a conjunction points to "rx".</span><br/>
      <span>&emsp;&emsp;&emsp;The conjunction point to "rx" also has 4 conjunction pointing to it. </span><br/>
      <span>&emsp;&emsp;&emsp;Therefore the steps can be found with the LCM of step count for when each conjunction sends a high pulse.</span><br/>
    </li>
  </ul>
</details>
<details closed>
  <summary>
    <h2>Day 21: 🚶 👑</h2>&nbsp;
    <h2><a href="https://github.com/Hollerina/Advent-Of-Code/tree/b4d233b6005a63552a61898431dc2d047a719b8c/2023/day21">Code</a></h2>
  </summary>
  <ul>
    <li>
      <b>Part 1:</b></br>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;Grid of rocks and garden plots.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find how many garden plots the elf can reach using 64 steps.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Summation of the garden plots after 64 steps.</span><br/>
      <b>&emsp;Solution Overview:</b></br>
      <span>&emsp;&emsp;&emsp;Find the coordinates of the start posistion marked by "S".</span><br/>
      <span>&emsp;&emsp;&emsp;For north, south, west and east see if there holds a ".".</span><br/>
      <span>&emsp;&emsp;&emsp;If it does then add to a set which will then contain the next set of points to look at.</span><br/>
      <span>&emsp;&emsp;&emsp;Continue until 64 steps has been reached.</span><br/>
      <b>Part 2:</b><br/>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;Grid of rocks and garden plots.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find how many garden plots the elf can reach using 26501365 steps witha forever repeating grid.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Sum of all the steps</span><br/>
      <b>&emsp;Solution Overview:</b><br/>
      <span>&emsp;&emsp;&emsp;Using an example followed in <a href="https://youtu.be/9UOMZSL0JTg?si=tHfi1VHB2hjJ_7cU">HyperNeutrino video</a></span><br/>
    </li>
  </ul>
</details>
<details closed>
  <summary>
    <h2>Day 22: 🧱 👑</h2>&nbsp;
    <h2><a href="https://github.com/Hollerina/Advent-Of-Code/blob/b4d233b6005a63552a61898431dc2d047a719b8c/2023/day22/day22.nim">Code</a></h2>
  </summary>
  <ul>
    <li>
      <b>Part 1:</b></br>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;Each line represents the size of the blocks.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find which blocks if distinagrated wouldn't topple the tower.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Sum of number of blocks.</span><br/>
      <b>&emsp;Solution Overview:</b></br>
      <span>&emsp;&emsp;&emsp;Start by sorting the bricks based on their z coordinate.</span><br/>
      <span>&emsp;&emsp;&emsp;Sorting these bricks allows us to see how they would be lay out. Need to check if there is any overlap.</span><br/>
      <span>&emsp;&emsp;&emsp;Overlap can be found using the x and y coords If they do then they need to go in the next z column.</span><br/>
      <span>&emsp;&emsp;&emsp;Create sets to hold what each brick holds and what is holding it.</span><br/>
      <span>&emsp;&emsp;&emsp;Using these sets find the value of the bricks that wont call it all too fall.</span><br/>
      <b>Part 2:</b><br/>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;Each line represents the size of the blocks.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find how many blocks would topple if the carrying blocks were disintergrated.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Sum of number blocks which will fall.</span><br/>
      <b>&emsp;Solution Overview:</b><br/>
      <span>&emsp;&emsp;&emsp;Using same method for part1, but instead of finding block which won't fall.</a></span><br/>
      <span>&emsp;&emsp;&emsp;Find blocks which only have 1 support and create a set holding all the blocks that will fall with it.</span><br/>
    </li>
  </ul>
</details>
<details closed>
  <summary>
    <h2>Day 23: 🥾</h2>&nbsp;
    <img width="23" height="23" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" />
    <h2><a href="https://github.com/Hollerina/Advent-Of-Code/blob/b4d233b6005a63552a61898431dc2d047a719b8c/2023/day22/day22.nim">Code</a></h2>
  </summary>
  <ul>
    <li>
      <b>Part 1:</b></br>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;Grid showing forest and paths.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find the longest path from the start till the end.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Summation of the length of the path.</span><br/>
      <b>&emsp;Solution Overview:</b></br>
      <span>&emsp;&emsp;&emsp;Search the grid and when at a crossjunction add that path to an array.</span><br/>
      <span>&emsp;&emsp;&emsp;Continue till reach the end step and add the length to an array.</span><br/>
      <span>&emsp;&emsp;&emsp;Continue for all paths. Then find the maxiumum of array lengths.</span><br/>
      <b>Part 2:</b><br/>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;Grid showing forest and paths.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find the longest path from the start till the end.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Summation of the length of the path.</span><br/>
      <b>&emsp;Solution Overview:</b><br/>
      <span>&emsp;&emsp;&emsp;Find the cross junction points finding the lengths to the end.</a></span><br/>
    </li>
  </ul>
</details>
<details closed>
  <summary>
    <h2>Day 23: 🌧️</h2>&nbsp;
    <img width="23" height="23" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" />
    <h2><a href="https://github.com/Hollerina/Advent-Of-Code/blob/b4d233b6005a63552a61898431dc2d047a719b8c/2023/day22/day22.nim">Code</a></h2>
  </summary>
  <ul>
    <li>
      <b>Part 1:</b></br>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;Posistion and Velocity.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find the number of hailstones that will hit each other.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;Summation of number of hit hailstones.</span><br/>
      <b>&emsp;Solution Overview:</b></br>
      <span>&emsp;&emsp;&emsp;Using pairings of each of the hailstones calculate if they hit.</span><br/>
      <span>&emsp;&emsp;&emsp;Using an equation of a line calculate if they hit by finding the coords they cross.</span><br/>
      <span>&emsp;&emsp;&emsp;Check if coords are in the furture of both of these paths.</span><br/>
      <b>Part 2:</b><br/>
      <b>&emsp;Input:</b><br/>
      <span>&emsp;&emsp;&emsp;Posistion and Velocity.</span><br/>
      <b>&emsp;Task:</b><br/>
      <span>&emsp;&emsp;&emsp;Find where to throw the stone from to hit all hailstones.</span><br/>
      <b>&emsp;Output:</b><br/>
      <span>&emsp;&emsp;&emsp;multiplication of x y z coords of stone throwing.</span><br/>
      <b>&emsp;Solution Overview:</b><br/>
      <span>&emsp;&emsp;&emsp;Using Linear equations of coords and then using gauss elimination to find the coords.</a></span><br/>
    </li>
  </ul>
</details>
<span>&emsp;&emsp;&emsp;</span><br/>

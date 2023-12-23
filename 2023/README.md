# Advent-Of-Code-2023 :santa::christmas_tree:
For Advent of Code 2023 I have decided to test a variety of my programming langues and therefore my solutions will consist of various languages. Below is the Languages I have used so far:
- TypeScript <img width="17" height="17" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
- C# <img width="17" height="17" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
- Python <img width="17" height="17" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
- Java <img width="17" height="17" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
- C <img width="17" height="17" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
- Julia <img width="17" height="17" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/julia/julia-original.svg" />
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
<span>&emsp;&emsp;&emsp;</span><br/>

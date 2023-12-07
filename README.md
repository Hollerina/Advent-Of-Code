# Advent-Of-Code-2023 :santa::christmas_tree:
For Advent of Code 2023 I have decided to test a variety of my programming langues and therefore my solutions will consist of various languages. Below is the Languages I have used so far:
- TypeScript <img width="17" height="17" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
- C# <img width="17" height="17" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
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
    <h2><a href="">Code</a></h2>
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
<span>&emsp;&emsp;&emsp;</span><br/>

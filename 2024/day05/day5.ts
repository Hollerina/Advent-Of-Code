import * as fs from 'fs'
const input = fs.readFileSync('./day05/day5.txt', 'utf-8').split('\n\n')
const rules = input[0].split('\n')
const lines = input[1].split('\n')

console.log(lines)

// Map every rule into an array for each pair
let pairRules: number[][] = []
for (let rule of rules) {
  pairRules.push(rule.split('|').map((elm) => Number(elm)))
}

// Split lines into each individual element
let updates: number[][] = []
for (let line of lines) {
  console.log(line)
  updates.push(line.split(',').map((elm) => Number(elm)))
}

console.log(updates)

// Map could be key of number and each key holds rules associated with it
// Loop through the rules and each number if number doesn't exist in map add it with the pair, if does add rule

let setOfRules = {}
for (let pair of pairRules) {
  if (!setOfRules.hasOwnProperty(pair[0])) {
    setOfRules[pair[0]] = []
    setOfRules[pair[0]].push(pair)
  } else {
    setOfRules[pair[0]].push(pair)
  }
  if (!setOfRules.hasOwnProperty(pair[1])) {
    setOfRules[pair[1]] = []
    setOfRules[pair[1]].push(pair)
  } else {
    setOfRules[pair[1]].push(pair)
  }
}

// Run through each update and check number in right place by checking rules it is in
let updatesNeeded: number[][] = []
let brokenUpdates: number[][] = []
for (let update of updates) {
  console.log('update', update)
  let brokenUpdate = false
  for (let i = 0; i < update.length; i++) {
    // Check the value against the rules in the rules object
    // Loop through each rule with a before and after
    console.log(update[i])
    for (let rule of setOfRules[update[i]]) {
      let before = rule[0]
      let after = rule[1]
      // IF either of them are -1 then rule is irrelevant
      if (update.indexOf(before) === -1 || update.indexOf(after) === -1) {
        continue
      }

      //if before is bigger than after then rule is broken
      if (update.indexOf(before) > update.indexOf(after)) {
        brokenUpdate = true
      }
    }
    if (brokenUpdate) {
      break
    }
  }
  if (!brokenUpdate) {
    //Add it too array
    updatesNeeded.push(update)
  } else {
    brokenUpdates.push(update)
  }
}
// On the found arrays find the middle values
let total = 0
for (let update of updatesNeeded) {
  console.log(update)
  console.log((update.length - 1) / 2)
  total += update[(update.length - 1) / 2]
}

// Sort them with the rules

console.log(total)

// If fails at rule then update it to be at index before to make it work. Go back to start to check and continue

for (let update of brokenUpdates) {
  let brokenUpdate = false
  for (let i = 0; i < update.length; i++) {
    // Check the value against the rules in the rules object
    // Loop through each rule with a before and after
    console.log(update[i])
    for (let rule of setOfRules[update[i]]) {
      let before = rule[0]
      let after = rule[1]
      // IF either of them are -1 then rule is irrelevant
      if (update.indexOf(before) === -1 || update.indexOf(after) === -1) {
        continue
      }

      //if before is bigger than after then rule is broken
      if (update.indexOf(before) > update.indexOf(after)) {
        update.splice(update.indexOf(before), 1)
        update = [
          ...update.slice(0, update.indexOf(after) - 1),
          before,
          ...update.slice(update.indexOf(after)),
        ]
        brokenUpdate = true
      }
    }
    // Infinite loop if was broken same twice needs no update
    if (brokenUpdate) {
      i = -1
      brokenUpdate = false
    }
  }
  if (!brokenUpdate) {
    //Add it too array
    updatesNeeded.push(update)
  }
}

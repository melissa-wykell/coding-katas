/**
 * For each of the following Array methods,

 * 1. use them in an example
 * 2. use console.log() to make the code run in the console!

 **/

// .sort()
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'violet']
colors.sort()

console.log(colors)

// .concat()
const str1 = 'Hello '
const str2 = 'world:)'
const res = str1.concat(str2)

console.log(res)

// .indexOf()
const first = colors [1]

console.log(first)

// .split() (on Strings)
const sentence = ('How are you today?')
let words = sentence.split(' ')

console.log(words)

// .join()
const rainbow = colors.join()

console.log(rainbow)

// .pop()
const fruit = ['apple', 'orange', 'lemon']
const last = fruit.pop()

console.log(last)

// .push()
fruit.push('grape')

console.log(fruit)

// .slice()
const pizzaToppings = ['sausage', 'peperoni', 'onion', 'pepper']
var meat = pizzaToppings.slice(1, 2)

console.log(meat)

// .splice()
const removed = pizzaToppings.splice(2, 1, 'tomato')

console.log(removed)
console.log(pizzaToppings)

// .shift()
const fish = ['blue gill', 'angel', 'lion', 'clown']
fish.shift()

console.log(fish)

// .unshift()
fish.unshift('dart')

console.log(fish)

// .filter()
const age = [21, 29, 13, 22]

let filtered = age.filter(checkAdult)

function checkAdult (age) {
  return age >= 18
}
console.log(filtered)

// .map()
const numbers = [1, 4, 9]
const roots = numbers.map(Math.sqrt)

console.log(roots)

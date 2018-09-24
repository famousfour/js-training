'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(string) {
  return string.split(' ').map(word =>word[0].toUpperCase()+word.slice(1).toLowerCase()).join(" ")
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(jadenCase('You are waiting for me'), "You Are Waiting For Me")

// End of tests */

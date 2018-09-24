'use strict'

/*
 * Create a constant variable named `escapeStr` that contains
 * the following specials characters: /\`"'
 *
 * @notions Primitive and Operators, Variables
 */

// Your code :
const escapeStr = "It was a \'dark\' night, " + 'the owls \"were\" flying, ' + "Cats were `meowing`, " + 'wherewolves were growling/' + "\\"
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof escapeStr, 'string')
assert.strictEqual(escapeStr.includes("'"), true)
assert.strictEqual(escapeStr.includes('"'), true)
assert.strictEqual(escapeStr.includes('`'), true)
assert.strictEqual(escapeStr.includes('/'), true)
assert.strictEqual(escapeStr.includes('\\'), true)
// End of tests */

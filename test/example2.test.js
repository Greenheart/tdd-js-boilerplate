const test = require('tape')
const subtract = require('../example').subtract

test('subtract()', t => {
  t.ok(typeof subtract(3, 2) === 'number', 'should return a number')
  t.equal(subtract(3, 2), 1, 'should subtract two numbers correctly')
  t.end()
})

const test = require('tape')
const add = require('../example').add

test('add()', t => {
  t.ok(typeof add(1, 2) === 'number', 'should return a number')
  t.equal(add(1, 2), 3, 'should add two numbers correctly')
  t.end()
})

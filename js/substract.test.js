const { test, expect } = require('@jest/globals')
const substract = require('./substract')

test('properly subtracting two numbers', ()=> {
    expect(substract(1,2)).toBe(-1)
})
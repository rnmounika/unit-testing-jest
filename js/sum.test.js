const sum = require ('./sum')

test('Testing sum method',()=>{
   expect(
       sum(1,2)
       ).toBe(3)
})
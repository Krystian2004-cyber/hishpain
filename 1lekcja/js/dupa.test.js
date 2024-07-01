 const {add, substract} = require('./dupa');

 test('adds 1+2 to be equal 3',() =>{
    expect(add(1,2)).toBe(3)
 });


 test('substracts 5-3 to be equal 2',() =>{
    expect(substract(5,3)).toBe(2)
 });
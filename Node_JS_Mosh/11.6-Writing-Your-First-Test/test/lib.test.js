const lib = require('../lib');
test('Absolute--Should return a positive , if input is positive',()=>{
    const result = lib.absolute(1);
    expect(result).toBe(1);
});
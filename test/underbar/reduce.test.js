const _ = require('../../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    expect(_.reduce([1,2,3], (acc, val) => acc + val, 2)).toBe(8)
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    expect(_.reduce([1,2,3], (acc, val) => acc + val)).toBe(6)
  });

});
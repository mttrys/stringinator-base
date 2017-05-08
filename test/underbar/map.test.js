const _ = require('../../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    let arr = [0,1,2]
    expect(_.map(arr, el => el * el)).toEqual([0,1,4]);
  });
});
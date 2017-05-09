const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const nums = [0,1,2,3,4];
    expect(_.some(nums, el => el % 2 === 1)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [0,2,4,6,8];
    expect(_.some(nums, el => el % 2 === 1)).toBe(false);
  });

});
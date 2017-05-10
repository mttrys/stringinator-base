const _ = require('../../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
    expect(_.last([0,1,2,3,4])).toEqual(4)
  });

  it('returns the last 2 elements of an array', () => {
    expect(_.last([0,1,2,3,4], 2)).toEqual([3,4])
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    expect(_.last([0,1,2,3,4], 10)).toEqual([0,1,2,3,4])
  });
});
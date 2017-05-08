const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    expect(_.isArrayLike([0,1,2,3])).toBe(true);
  });

  it('returns true for an array-like object', () => {
    expect(_.isArrayLike({ length: 3, 0: 'a', 1: 'b', 2: 'c'})).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    expect(_.isArrayLike({ 0: 'a', 1: 'b'})).toBe(false);
  });
});

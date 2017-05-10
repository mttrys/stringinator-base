const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    let ar = ['a','b','c','d',1,2,3,4];
    expect(_.indexOf(ar, 'a')).toBe(0);
  });

  it('returns the index of a value at the end of an array', () => {
    let ar = ['a','b','c','d',1,2,3,4];
    expect(_.indexOf(ar, 4)).toBe(7);
  });

  it('returns -1 for a missing value', () => {
    let ar = ['a','b','c','d',1,2,3,4];
    expect(_.indexOf(ar, 'x')).toBe(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    let ar = ['a','b','c','c',1,2,3,4];
    expect(_.indexOf(ar, 'c')).toBe(2);
  });

  it('starts searching at the given offset', () => {
   let ar = ['a','b','c',1,'c',2,3,4];
   expect(_.indexOf(ar, 'c', 3)).toBe(4)
  });

});
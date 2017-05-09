const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    expect(_.uniq([0,0,0,1,1,2,3,3])).toEqual([0,1,2,3])
  });
});
const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const oddArray = [0,1,2,3,4];
    expect(_.filter(oddArray, el => el % 2 === 1)).toEqual([1,3])

  });

  it('filters an object to only numeric values', () => {
    const object = {
      a: 0,
      b: 1,
      c: 2,
      d: 'd',
      e: 'e',
      f: 'f'
    };

    const filteredForStrings = _.filter(object, el => !isNaN(el));

    expect(filteredForStrings).toEqual([0,1,2])

  });
});
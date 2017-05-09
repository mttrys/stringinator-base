const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    expect(_.reject([0,1,2,3], value => value % 2 === 1)).toEqual([0,2])
  });

  it('rejects null values from an object', () => {

    const obj = {
      0: 0,
      1: 1,
      2: 'a',
      3: 'b',
      4: null,
      5: true,
      6: false
    }
    const res = [0,1,'a','b',true,false]

    expect(_.reject(obj, value => value === null)).toEqual(res)
  });
});
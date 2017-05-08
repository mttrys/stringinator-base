const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    let values = [{name: 'a', age: 0},{name: 'b', age: 1},{name: 'c', age: 2}]
    expect(_.pluck(values, 'age')).toEqual([0,1,2])
  });

});
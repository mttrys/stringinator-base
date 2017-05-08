const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    const arr = ['a', 'b', 'c'];
    _.each(arr, function(element, index, array) {
      expect(element).toEqual(array[index]);
    });
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    const arrLike = {length: 2, 0: 'a', 1: 'b'}
    _.each(arrLike, function(element, key, arrLike) {
      expect(element).toEqual(arrLike[key]);
    });
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    const object = { 0: 'a', 1: 'b', 2: 'c'};
    _.each(object, function(element, key, object) {
      expect(element).toEqual(object[key]);
    });
  });
})


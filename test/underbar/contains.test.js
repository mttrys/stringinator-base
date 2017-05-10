const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    let ar = ['a','b','c','d','e'];
    expect(_.contains(ar, 'a')).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    let ar = ['a','b','c','d','e'];
    expect(_.contains(ar, 'f')).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    let ob = {0: 'a', 1: 'b'};
    expect(_.contains(ob, 'a')).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    let ob = {0: 'a', 1: 'b'};
    expect(_.contains(ob, 'c')).toBe(false);
  });

});
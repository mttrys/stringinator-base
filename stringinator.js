const _ = require('./underbar');

const first = function(str, n) {
  return _.first(str, n);
};

const last = function(str, n) {
  return _.last(str, n);
};

const removeChar = function(str, target) {
  return _.reject(str, letter => letter === target).join('');
};

const hasChar = function(str, target) {
  return _.some(str, letter => letter === target);
};

const isOnlyDigits = function(str) {
  return _.every(str.split(''), char => !isNaN(char));
};

const filterToOnlyDigits = function(str) {
  return _.filter(str.split(''), char => !isNaN(char)).join('').trim();
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  // hint: use truncateString above
  // Your code goes here
};

const countChars = function(str) {
  let chars = {};
  _.each(str.split(''), letter => {
    if (letter in chars){
      chars[letter]++;
    }
    else{
      chars[letter] = 1;
    }
  })
  return chars;
};

const dedup = function(str) {
  return _.uniq(str.split('')).join('')
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};
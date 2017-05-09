const stringinator = require('../../stringinator');

describe('removeChar()', () => {
  it('removes a target char', () => {
    expect(stringinator.removeChar('bubbles', 'u')).toEqual('bbbles');
  });
  it('removes a target char', () => {
    expect(stringinator.removeChar('u', 'u')).toEqual('');
  });

});

global.window = global;
global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

  describe('filterFeedlabel', () => {
  it('debería ser una función', () => {
   assert.equal(typeof filterData, 'function');
  });
  });
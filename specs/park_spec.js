var assert = require('assert');
var Park = require('../park.js');

describe('Park', function() {
  var park;

  beforeEach(function () {
    park = new Park();
  });

  it('park starts empty', function() {
    assert.strictEqual(0, park.dinosaurs.length);
  });

});

var assert = require('assert');
var Dinosaur = require('../dinosaur.js')

describe('Dinosaur', function() {

  var dino1;
  var dino2;
  var dino3;


  beforeEach(function() {
    dino1 = new Dinosaur({type: "tyrannosaurus"});
    dino2 = new Dinosaur({type: "velociraptor"});
    dino3 = new Dinosaur({type: "triceratops"});
  });


  it('can get back type from dinosaur', function() {
    assert.strictEqual("tyrannosaurus", dino1.type);
  });

  it('can get back velociraptor from dinosaur', function() {
    assert.strictEqual("velociraptor", dino2.type);
  });

  it('can get back triceratops from dinosaur', function() {
    assert.strictEqual("triceratops", dino3.type);
  });

});

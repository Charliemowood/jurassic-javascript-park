var assert = require('assert');
var Dinosaur = require('../dinosaur.js')

describe('Dinosaur', function() {

  var dino1;
  var dino2;
  var dino3;


  beforeEach(function() {
    dino1 = new Dinosaur({type: "tyrannosaurus", offspring: 1});
    dino2 = new Dinosaur({type: "velociraptor", offspring: 2});
    dino3 = new Dinosaur({type: "triceratops", offspring: 3});
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

  it('can get back offspringPerYear from dinosaur', function() {
    assert.strictEqual(3, dino3.offspringPerYear);
  });

  it('can get back offspringPerYear from velociraptor', function() {
    assert.strictEqual(2, dino2.offspringPerYear);
  });



});

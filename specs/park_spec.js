var assert = require('assert');
var Park = require('../park.js');
var Dinosaur = require('../dinosaur.js');

describe('Park', function() {
  var park;
  var dino1;
  var dino2;
  var dino3;

  beforeEach(function () {
    park = new Park();
    dino1 = new Dinosaur({type: "tyrannosaurus", offspring: 1});
    dino2 = new Dinosaur({type: "velociraptor", offspring: 2});
    dino3 = new Dinosaur({type: "triceratops", offspring: 3});
  });

  it('park starts empty', function() {
    assert.strictEqual(0, park.dinosaurs.length);
  });

  it('can add dinosaur to park', function() {
    park.addDinosaur(dino1);
    assert.strictEqual(1, park.dinosaurs.length)
  });

  it('can add different dinosaur to park', function() {
    park.addDinosaur(dino2);
    assert.strictEqual(1, park.dinosaurs.length)
  });

  it('can add multiple dinosaurs to park', function() {
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    assert.strictEqual(3, park.dinosaurs.length)
  });

  it('can remove dinosaur/s by type', function() {
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino3);
    park.removeByType(dino3);
    assert.strictEqual(2, park.dinosaurs.length);
  });

  it('can remove different dinosaur/s by type', function() {
    park.addDinosaur(dino1);
    park.addDinosaur(dino2);
    park.addDinosaur(dino3);
    park.addDinosaur(dino3);
    park.removeByType(dino2);
    assert.strictEqual(3, park.dinosaurs.length);
  });


});

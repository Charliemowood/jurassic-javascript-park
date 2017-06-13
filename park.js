var Park = function() {
  this.dinosaurs = [];
}

Park.prototype = {
  addDinosaur: function(dinosaur) {
    this.dinosaurs.push(dinosaur);
  }
}

module.exports = Park;

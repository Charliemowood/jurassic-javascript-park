var Dinosaur = require('./dinosaur.js')

var Park = function() {
  this.dinosaurs = [];
}

Park.prototype = {
  addDinosaur: function(dinosaur) {
    this.dinosaurs.push(dinosaur);
  },
  removeByType: function(dinosaurType) {
   for (var i = this.dinosaurs.length - 1; i >= 0; i--) {
     if (this.dinosaurs[i].type === dinosaurType.type) {
       this.dinosaurs.splice(i, 1);
     }
   }
 }
}




module.exports = Park;

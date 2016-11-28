var expect = require('chai').expect;
var beerschotPlayers = require('./index');

describe('beerschot-names', function () {

  describe('all', function () {
    it('should be an Array of strings', function () {
      expect(beerschotPlayers.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function (item) {
          return typeof item === 'string';
        });
      }
    });
    it('should containe Hernan Losada', function () {
      expect(beerschotPlayers.all).to.include('Hernan Losada');
    })
  });

  describe('random', function () {
    it('should return a random player from the beerschotPlayers.all', function () {
      var randomPlayer = beerschotPlayers.random();
      expect(beerschotPlayers.all).to.include(randomPlayer);
    });
      
    it('should return an Array of random items if passed a number', function() {
        var randomPlayers = beerschotPlayers.random(3);
        expect(randomPlayers).to.have.length(3);
        randomPlayers.forEach(function(player) {
          expect(beerschotPlayers.all).to.include(player);
        }); 
    });
  });

});
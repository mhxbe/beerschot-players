var uniqueRandomArray = require('unique-random-array');
var beerschotPlayers = require('./beerschot-players.json');
var getRandomPlayer = uniqueRandomArray(beerschotPlayers);

module.exports = {
  all: beerschotPlayers,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomPlayer();
  } else {
    var randomPlayers = [];
    for (var i = 0; i < number; i += 1) {
      randomPlayers.push(getRandomPlayer());
    }
    return randomPlayers;
  }
}
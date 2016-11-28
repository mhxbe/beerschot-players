var uniqueRandomArray = require('unique-random-array');
var beerschotPlayers = require('./beerschot-players.json');

module.exports = {
    all: beerschotPlayers,
    random: uniqueRandomArray(beerschotPlayers)
};
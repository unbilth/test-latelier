"use strict";
const dataPath = require('../db/db.json');
const utils = require('../utils/utils.js');

/**
 * Get players data from a json file (fake db)
 */
const getPlayers = () => {
  const items = dataPath.players;
  const playersByRank = [...items].sort((a, b) => a.data.rank - b.data.rank);
  return playersByRank;
}

/**
 * Get player's data from a json file (fake db)
 * @param {number} id - The id player.
 */
const getPlayerById = (id) => {
  if (isNaN(id)) {
    throw 'Id parameter is not a number!';
  }
  const player = dataPath.players.find(player => player.id === id);
  return player;
}

/**
 * Get the country with the most wins, the average dmi of 
 * the players and their average height from a json file (fake db)
 */
const getPlayersStats = () => {
  const mapi = dataPath.players.map(x => {
    const sum = x.data.last.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
      
    const playerInfo = {
      'wins': sum,
      'country': x.country.code,
    }
    return playerInfo;
  })

  const medianHeightArr = dataPath.players.map(playerInfo => playerInfo.data.height);

  const dmiArr = dataPath.players.map(playerInfo => {
    const weightFormatted = playerInfo.data.weight.toString()[0] + playerInfo.data.weight.toString()[1];
    const playerDmi = weightFormatted / ((playerInfo.data.height * playerInfo.data.height) / 10000).toFixed(2)
    return playerDmi;
  });
  
  const dmiAverage = dmiArr.reduce((a, b) => a + b, 0) / dmiArr.length;
  const bestCountry = [...mapi].sort((a, b) => b.wins - a.wins)[0].country;
  const medianHeightPlayers = utils.median(medianHeightArr);
  
  const stats = {
    'CountryHighestWin': bestCountry,
    'AverageDmi': dmiAverage,
    'medianSize': medianHeightPlayers
  }

  return stats;
}

module.exports = {
  getPlayers,
  getPlayerById,
  getPlayersStats
};
"use strict";
const playerModel = require('../models/playerModel');

/**
 * Send to the client the data of all the players
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
const player_list = (req, res) => {
  try {
    const players = playerModel.getPlayers();
    res.status(200).json(players);
  } catch(e){
    res.status(500).send(e.message);
  }
};

/**
 * Send to the client the data of a player
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
const player_details = (req, res) => {
  try{
    const id = parseInt(req.params.id);
    const player = playerModel.getPlayerById(id);
    res.status(200).json(player)
  } catch(e){
    res.status(500).send(e);
  }
};

/**
 * Send to the client the country with the most wins, 
 * the average dmi of the players and their average 
 * height
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
const players_stats = (req, res) => {
  try{
    const playersStats = playerModel.getPlayersStats();
    res.status(200).json(playersStats)
  } catch(e) {
    res.status(500).send(e.message);
  }
};

module.exports = {
  player_list,
  player_details,
  players_stats
};
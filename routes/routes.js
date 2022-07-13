"use strict";
const express = require("express")
const router = express.Router();
const player_Controller = require('../controllers/playerController');

// routes linked to the player controller
router.get('/players/stats', player_Controller.players_stats);
router.get('/players', player_Controller.player_list);
router.get('/player/:id', player_Controller.player_details);

module.exports = router;

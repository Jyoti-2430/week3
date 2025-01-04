const express = require('express');
const router = express.Router();

// Import controllers
const { getSongs, addSong, getSongById } = require('../controllers');

// Define routes
router.get('/songs', getSongs);
router.post('/songs', addSong);
router.get('/songs/:id', getSongById);

module.exports = router;
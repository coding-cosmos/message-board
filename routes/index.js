const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.get('/', messageController.messageListGet);
router.get('/new',messageController.newMessageGet);
router.post('/new',messageController.newMessagePost);

module.exports = router;

const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

router.post('/add', postController.addPost);
router.post('/', postController.getPost);

module.exports = router;

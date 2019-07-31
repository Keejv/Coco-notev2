const express = require('express');
const router = express.Router();

// Router   GET api/auth
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send('User auth'));

module.exports = router;
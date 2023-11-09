const express = require('express');
const router = express.Router();

// GET / router
router.get('/', (req, res) => {
    res.send('hello, express');
});

module.exports = router;
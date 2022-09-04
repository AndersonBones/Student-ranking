const express = require('express');
const router = express.Router();

const Controllers = require('../Controllers/Controllers')

router.get('/', Controllers.home)

module.exports = router;
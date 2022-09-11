const express = require('express');
const router = express.Router();

const Controllers = require('../Controllers/Controllers')

router.get('/', Controllers.home)
router.get('/register',Controllers.registrarPage);
router.get('/ranking', Controllers.getRanking)
router.get('/search', Controllers.searchAluno);
router.post("/New", express.urlencoded({extended:true}), Controllers.Registrar);

module.exports = router;
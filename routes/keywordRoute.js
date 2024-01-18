
const express = require('express');
const router = express.Router();
const keywordController = require('../controllers/keywordController.js');

router.get('/allKeywordVolumes', keywordController.getAllKeywordVolumes);
router.get('/:keyword', keywordController.getSearchVolume);
router.put('/:keyword', keywordController.updateSearchVolume);

module.exports = router;





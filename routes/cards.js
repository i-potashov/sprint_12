const router = require('express').Router();
const cards = require('../data/cards');

const sendCards = (req, res) => {
  res.send(cards);
};

router.get('/', sendCards);

module.exports = router;

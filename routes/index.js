const router = require('express').Router();
const users = require('./users');
const cards = require('./cards');

router.use('/users', users);
router.use('/cards', cards);
router.use('/*', (req, res) => {
  res.send({ message: 'Запрашиваемый ресурс не найден' }, 404);
});
module.exports = router;

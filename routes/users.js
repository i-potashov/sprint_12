/* eslint no-underscore-dangle: 0 */
const router = require('express').Router();
const users = require('../data/users');

const sendUsers = (req, res) => {
  res.send(users);
};

const sendUserId = (req, res) => {
  const { id } = req.params;
  const user = users.find((val) => val._id === id);
  return user ? res.send(user) : res.send({ message: 'Нет пользователя с таким id' }, 404);
};

router.get('/', sendUsers);
router.get('/:id', sendUserId);

module.exports = router; // экспортировали роутер

// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const test = require('./test')
const com = require('./com')
// Підключіть інші файли роутів, якщо є

// Об'єднайте файли роутів за потреби
router.use('/', test)
router.use('/com', com)
// Використовуйте інші файли роутів, якщо є

// Експортуємо глобальний роутер
module.exports = router

const express = require('express')
const { registerUser } = require('../controllers/userController')
const { authUser, allUsers } = require('../controllers/userController')


const router = express.Router()//instance of router from express

router.route('/').post(registerUser)//can be written as router.route or router.post
router.post('/login', authUser) //will be after /api/user
router.route('/').get(allUsers)

module.exports = router



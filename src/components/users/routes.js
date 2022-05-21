const express = require('express')
const router = express.Router()
const { createUser, deleteUser, getUser, getUsers, updateUser } = require('./actions')

// GET all
router.get('/', getUsers)

// GET by ID
router.get('/:id', getUser)

// POST Create a user
router.post('/', createUser)

// PUT Update a user's info
router.put('/:id', updateUser)

// DELETE by ID
router.delete('/:id', deleteUser)

module.exports = router
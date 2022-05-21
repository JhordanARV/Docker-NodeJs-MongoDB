const User = require('./model')


const createUser = (req, res) => {
  const newUser = new User(req.body) 
  newUser.save((error, userSaved) => {
    if (error) {
      res.status(422).send(error)
    } else {
      res.status(201).send(userSaved)
    }
  })
}

const deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id, (error, result) => {
    if (error) {
      res.status(500).send(error)
    } else {
      res.status(204)
    }
  })
}

const getUser = (req, res) => {
    User.findById(req.params.id, (error, user) => {
    if (error) {
      res.status(500).send(error)
    } else if (user) {
      res.send(user)
    } else {
      res.status(404).send({})
    }
  })
}

const getUsers = (req, res) => {
  let query = req.query
  if (req.query.name) {
    query = { name: new RegExp(`.*${req.query.name}.*`, 'i') }
  }

  User.find(query, (error, users) => {
    if (error) {
      res.status(500).send(error)
    } else {
      res.send(users)
    }
  })
}

const updateUser = (req, res) => {
    User.updateOne({ _id: req.params.id }, req.body, (error, result) => {
    if (error) {
      res.status(422).send(error)
    } else {
      res.send(result)
    }
  })
}

module.exports = { createUser, deleteUser, getUser, getUsers, updateUser }

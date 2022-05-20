const {Router} = require('express');
const router = Router();

const mongoose = require("mongoose");

mongoose.connect('mongodb://mongo/mydb')
    .then(db => console.log("DB IN CONECT TO ", db.connection.host))
    .catch(err => console.error(err));

router.get('/', (req, res) => {
    res.json({message: "Hello Word !!"});
})

module.exports = router;
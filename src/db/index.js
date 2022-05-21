const mongoose = require("mongoose");

mongoose.connect('mongodb://mongo/mydb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log("DB IN CONECT TO ", db.connection.host))
    .catch(err => console.error(err));

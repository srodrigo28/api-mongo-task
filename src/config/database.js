const mongoose = require('mongoose');

const url =  "mongodb+srv://rodrigoexer1:2020Admin@cluster0.2ilevle.mongodb.net/"
// const url =  "mongodb+srv://localhost:27017/todo1"

mongoose.connect(url, { useNewUrlParser: true });

module.exports = mongoose;
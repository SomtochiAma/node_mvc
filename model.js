//const mongoose = require('mongoose');

/*mongooseDB = "mongodb://localhost:27017/test";
mongoose.connect(mongooseDB); */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test');

exports.test = function(req,res) {
  res.render('test');
};


var userMessageSchema = new Schema({
    name: String,
    email: {type: String, required: [true, "Input an email please"]},
    message: String,
    date: {type: Date,}
})

var userMessage = mongoose.model("UserMessage", userMessageSchema);
module.exports = userMessage;


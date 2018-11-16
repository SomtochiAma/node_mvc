const mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongooseDB = "mongodb://127.0.0.1/my_database";
mongoose.connect(mongooseDB);

var userMessageSchema = new Schema({
    name: String,
    email: {type: String, required: [true, "Input an email please"]},
    message: String,
    date: {type: Date,}
})

var userMessage = mongoose.model("UserMessage", userMessageSchema);
module.exports = userMessage;


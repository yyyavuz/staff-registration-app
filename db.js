var mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/user-list', {useMongoClient : true});

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name : String,
    surname : String,
    birthdate : String,
    email : String
});

mongoose.model("User", userSchema);

module.exports = mongoose;

//db model
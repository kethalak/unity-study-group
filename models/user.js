var mongoose = require("mongoose");
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    messages: [{type: Schema.Types.ObjectId, ref: 'Message'}]
});

UserSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model("User", UserSchema);
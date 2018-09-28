var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var userSchema = new mongoose.Schema({
    name : String,
    username : String,
    password : String,
    image :String,
    phone: String,
    email: String,
    profile: Boolean,
    images:[{
        date: String,
        url: String
    }],
    unreadTexts: Number,
    friends: [{
        image: String,
        unreadText: Number,
        lastText: {
            time: String,
            message: String,
            media:String
        },
        name: String,
        friendStatus: String,
        blockStatus: String
    }],
    settings: {
        age: Number,
        intension: String,
        gender: String,
        orientation: String,
        country: String,
        education: String
    }
});
userSchema.methods.generatHarsh = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
};
userSchema.methods.validPassword =function (password) {
    return bcrypt.compareSync(password,this.password);
};
module.exports = mongoose.model('users', userSchema);
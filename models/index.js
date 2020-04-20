const mongoose = require("mongoose");

const ContactMeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    }, 
    message: {
        type: String,
        require: true
    }
})

const ContactMe = mongoose.model("contactMe", ContactMeSchema);

module.exports = ContactMe;
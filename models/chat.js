const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    message: {
        type: String,
        maxLength: 50,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now

    }
});

const Chat=mongoose.model('Chat',chatSchema);
module.exports=Chat;
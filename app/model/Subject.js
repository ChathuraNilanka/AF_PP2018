const mongodb = require('mongoose');

const Subject = mongodb.Schema({
    name:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    amount :{
        type: Number,
        require: true
    },
    
});

module.exports = mongodb.model('subject', Subject);
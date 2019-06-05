const mongodb = require('mongoose');
const Schema = mongodb.Schema;

const Course = mongodb.Schema({
    name:{
        type: String,
        require: true
    },
    code:{
        type: String,
        require: true
    },
    p_mark :{
        type: Number,
        require: true
    },
    l_charge:{
        type: String,
        require: true
    },
    subjects: [{
        type: Schema.Types.ObjectId,
        ref: 'subject'
    }]
    
})

module.exports = mongodb.model('course', Course);
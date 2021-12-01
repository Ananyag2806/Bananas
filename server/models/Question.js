const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    quest: {
        type: String,
        required: true
    },
    opt1: {
        type: String,
        required: true
    },
    opt2: {
        type: String,
        required: true
    },
    opt3: {
        type: String,
        required: true
    },
    opt4: {
        type: String,
        required: true
    },
    ans: {
        type: String,
        required: true
    },

});

const Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;
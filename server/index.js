const express = require('express');
const mongoose = require('mongoose');
const QuestionModel = require('./models/Question');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://ananya:ananya@cluster0.gwvcs.mongodb.net/quiz?retryWrites=true&w=majority');

app.get('/', async (req, res) => {

    const quest = 'Question statement';
    const opt1 = 'option 1';
    const opt2 = 'option 2';
    const opt3 = 'option 3';
    const opt4 = 'option 4';
    const ans = 'option 4';

    const quiz = new QuestionModel({ quest: quest, opt1: opt1, opt2: opt2, opt3: opt3, opt4: opt4, ans: ans });

    try {
        await quiz.save();
        res.send('Inserted data');
    }
    catch (err) {
        console.log(err);
    }
});

app.get('/read', async (req, res) => {
    QuestionModel.find({}, (err, result) => {
        if (err) {
            res.send(err)
        }
        res.send(result);
    })
});

app.listen(3001, () => {
    console.log('Server running on port 3001...');
});
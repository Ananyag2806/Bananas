import './App.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function App() {

    const [questionList, setQuestionList] = useState([]);
    const [currQuest, setCurrQuest] = useState('');

    useEffect(() => {
        Axios.get('http://localhost:3001/read').then(response => {
            setQuestionList(response.data);
            console.log(response.data);
        })
    }, []);

    return (
        <div className="App">
            <h1>Can you answer these questions?</h1>

            {questionList.map((val, key) => {
                return (
                    <div key={key}>
                        <h3>{val.quest}</h3>

                        <h4>{val.opt1}</h4>
                        <h4>{val.opt2}</h4>
                        <h4>{val.opt3}</h4>
                        <h4>{val.opt4}</h4>

                    </div>
                );
            })}


            <button>Next</button>

        </div>
    );
}

export default App;

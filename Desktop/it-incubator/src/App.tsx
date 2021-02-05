import React from 'react';
import './App.css';
import Todolist, { TaskType } from './Todolist';

function App() {

    let task1 = [
        { id: 1, title: 'css', isDone: true },
        { id: 2, title: 'html', isDone: true },
        { id: 3, title: 'react', isDone: true },
        { id: 4, title: 'redux', isDone: false }
    ];
    let task2: Array<TaskType> = [
        { id: 1, title: 'Pred', isDone: true },
        { id: 2, title: 'Term', isDone: true },
        { id: 3, title: 'Com', isDone: true },
        { id: 4, title: 'Robo', isDone: false }
    ]

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={task1}/>
            <Todolist title="Movies" tasks={task2}/>
        </div>
    );
}

export default App;

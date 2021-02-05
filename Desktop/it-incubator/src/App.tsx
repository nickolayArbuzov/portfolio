import React, { useState } from 'react';
import './App.css';
import { Todolist, TaskType } from './Todolist';

export type FilterValuesType = 'all' | 'active' | 'completed';

function App() {

    let [filter, setFilter] = useState<FilterValuesType>('all')

    let [tasks, setTasks] = useState<Array<TaskType>>([
        { id: 1, title: 'css', isDone: true },
        { id: 2, title: 'html', isDone: true },
        { id: 3, title: 'react', isDone: true },
        { id: 4, title: 'redux', isDone: false },
        { id: 5, title: 'node', isDone: false },
    ]);

    const removeTask = (id: number) => {
        let filtTasks = tasks.filter(t => t.id !== id );
        setTasks(filtTasks);
    }

    const changeFilter = (value: FilterValuesType) => {
        setFilter(value);
    }

    let tasksForTODO = tasks;
    if (filter === 'completed'){
        tasksForTODO = tasks.filter(t => t.isDone === true);
    }
    if (filter === 'active'){
        tasksForTODO = tasks.filter(t => t.isDone === false);
    }
    return (
        <div className="App">
            <Todolist title="What to learn" 
                        tasks={tasksForTODO}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        />
        </div>
    );
}

export default App;

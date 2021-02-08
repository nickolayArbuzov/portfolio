import React, { useState } from 'react';
import './App.css';
import { Todolist, TaskType } from './Todolist';
import { v1 } from 'uuid';

export type FilterValuesType = 'all' | 'active' | 'completed';

function App() {

    let [filter, setFilter] = useState<FilterValuesType>('all')

    let [tasks, setTasks] = useState<Array<TaskType>>([
        { id: v1(), title: 'css', isDone: true },
        { id: v1(), title: 'html', isDone: true },
        { id: v1(), title: 'react', isDone: true },
        { id: v1(), title: 'redux', isDone: false },
        { id: v1(), title: 'node', isDone: false },
    ]);

    const removeTask = (id: string) => {
        let filtTasks = tasks.filter(t => t.id !== id );
        setTasks(filtTasks);
    }
    const addTask = (title: string) => {
        let newTask = { id: v1(), title: title, isDone: false};
        let newTasks = [newTask, ...tasks];
        setTasks(newTasks);
    }
    const changeFilter = (value: FilterValuesType) => {
        setFilter(value);
    }
    const changeTaskStatus = (taskId: string, isDone: boolean) => {
        let task = tasks.find( t => t.id === taskId );
        if (task){
            task.isDone = isDone;
        }
        setTasks([ ...tasks ]);
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
                        addTask={addTask}
                        changeTaskStatus={changeTaskStatus}
                        filter={filter}
                        />
        </div>
    );
}

export default App;

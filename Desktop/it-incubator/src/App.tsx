import React, { useState } from 'react';
import './App.css';
import { Todolist, TaskType } from './Todolist';
import { v1 } from 'uuid';

export type FilterValuesType = 'all' | 'active' | 'completed';
type TodolistType = {
    id: string,
    title: string,
    filter: FilterValuesType
}

function App() {

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
    const changeFilter = (value: FilterValuesType, todolistId: string) => {
        let todolist = todolists.find(td => td.id === todolistId);
        if(todolist) {
            todolist.filter = value;
            setTodolists([ ...todolists ]);
        }
    }
    const changeTaskStatus = (taskId: string, isDone: boolean) => {
        let task = tasks.find( t => t.id === taskId );
        if (task){
            task.isDone = isDone;
        }
        setTasks([ ...tasks ]);
    }

    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: v1(), title: 'what to learn', filter: 'active'},
        {id: v1(), title: 'what to buy', filter: 'completed'}
    ]);

    return (
        <div className="App">
            {
                todolists.map(td => {
                    let tasksForTODO = tasks;
                    if (td.filter === 'completed'){
                        tasksForTODO = tasks.filter(t => t.isDone === true);
                    }
                    if (td.filter === 'active'){
                        tasksForTODO = tasks.filter(t => t.isDone === false);
                    }
                    return <Todolist title={td.title} 
                                    key={td.id}
                                    id={td.id}
                                    tasks={tasksForTODO}
                                    removeTask={removeTask}
                                    changeFilter={changeFilter}
                                    addTask={addTask}
                                    changeTaskStatus={changeTaskStatus}
                                    filter={td.filter}
                        />
                })
            }
            
        </div>
    );
}

export default App;

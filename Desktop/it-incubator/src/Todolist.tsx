import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import { FilterValuesType } from './App';
import s from './Todolist.module.css';


export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

type PropsType = {
    title: string,
    tasks: Array<TaskType>,
    removeTask: (id: string) => void,
    changeFilter: (value: FilterValuesType) => void,
    addTask: (title: string) => void,
    changeTaskStatus: (taskId: string, isDone: boolean) => void,
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {
    let [newTaskTitle, setNewTaskTitle] = useState('');
    let [error, setError] = useState<string | null>(null);
    const onNewTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError('');
        if(e.charCode === 13){
            addTask();
        }
    }
    const addTask = () => {
        if(newTaskTitle.trim() === '') {
            setError('Title is required');
            return;
        }
        props.addTask(newTaskTitle.trim());
        setNewTaskTitle('');
    }
    const onAllClickHandler = () => props.changeFilter('all');
    const onActiveClickHandler = () => props.changeFilter('active');
    const onCompletedClickHandler = () => props.changeFilter('completed');
    
        return <div>
                <h3>{props.title}</h3>
                <div>
                    <input value={newTaskTitle} 
                        onChange={onNewTitleChangeHandler}
                        onKeyPress={onKeyPressHandler}
                        className={error ? 'error' : ''}/>
                    <button onClick={addTask}>+</button>
                    {error && <div className={'errorMessage'}>{error}</div>}
                </div>
                <ul>
                    {
                        props.tasks.map(t => {
                            const onRemoveHandler = () => props.removeTask(t.id);
                            const onChangeCheckBoxHandler = (e: ChangeEvent<HTMLInputElement>) => {
                                props.changeTaskStatus(t.id, e.currentTarget.checked);
                            }
                            return <li key={t.id} className={t.isDone ? 'isDone' : ''}>
                                <input type="checkbox"
                                    onChange={onChangeCheckBoxHandler}
                                    checked={t.isDone}/> 
                                <span>{t.title} </span>
                                <button onClick={onRemoveHandler}>X</button>
                            </li>
                        })
                    }
                </ul>
                <div>
                    <button className={props.filter === 'all' ? 'activeFilter' : ''} 
                            onClick={onAllClickHandler}>All</button>
                    <button className={props.filter === 'active' ? 'activeFilter' : ''} 
                            onClick={onActiveClickHandler}>Active</button>
                    <button className={props.filter === 'completed' ? 'activeFilter' : ''} 
                            onClick={onCompletedClickHandler}>Completed</button>
                </div>
            </div>
}


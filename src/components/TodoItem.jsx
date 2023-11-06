import React from 'react';
import './Todo.css';

function TodoItem({ todo, index, filter, completed, removeTodo, toggleCompleted }) {
    const isCompleted = completed ? 'completed' : '';

    if ((filter === 'completed' && !completed) || (filter === 'active' && completed)) {
        return null;
    }

    return (
        <li className={`task ${isCompleted}`}>
            <input type="checkbox" checked={completed} onChange={() => toggleCompleted(index)} />
            <span>{todo}</span>
            <button onClick={() => removeTodo(index)}>Delete</button>
        </li>
    );
}  

export default TodoItem;

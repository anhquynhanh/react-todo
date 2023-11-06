import React from 'react';
import TodoItem from './TodoItem';
import AddTodoForm from './AddTodoForm';
import './Todo.css'

function TodoList({ todos, filter, setFilter, addTodo, completed, removeTodo, toggleCompleted }) {
    return (
        <div>
            <h1>Todo List</h1>
            <AddTodoForm addTodo={addTodo} />
            {/* ... */}
            <ul >
                {todos.map((todo, index) => (
                    <TodoItem
                    key={index}
                    todo={todo}
                    index={index}
                    filter={filter}
                    completed={completed[index]}
                    removeTodo={removeTodo}
                    toggleCompleted={toggleCompleted}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
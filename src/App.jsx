import React, { useState, useEffect } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import FilterButtons from './components/FilterButtons';

function App() {
  const [todos, setTodos] = useState(loadFromLocalStorage('todos', []));
  const [task, setTask] = useState('');
  const [filter, setFilter] = useState('all');
  const [completed, setCompleted] = useState(loadFromLocalStorage('completed', []));

  useEffect(() => {
    saveToLocalStorage('todos', todos);
    saveToLocalStorage('completed', completed);
  }, [todos, completed]);

  const addTodo = (task) => {
    setTodos([...todos, task]);
    setCompleted([...completed, false]);
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    const updatedCompleted = [...completed];
    updatedTodos.splice(index, 1);
    updatedCompleted.splice(index, 1);
    setTodos(updatedTodos);
    setCompleted(updatedCompleted);
  };

  const toggleCompleted = (index) => {
    const updatedCompleted = [...completed];
    updatedCompleted[index] = !completed[index];
    setCompleted(updatedCompleted);
  };

  return (
    <div className="App">
      <TodoList
        todos={todos}
        filter={filter}
        setFilter={setFilter}
        addTodo={addTodo}
        completed={completed}
        removeTodo={removeTodo}
        toggleCompleted={toggleCompleted}
      />
      <FilterButtons setFilter={setFilter} />
    </div>
  );
}

const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const loadFromLocalStorage = (key, defaultValue) => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : defaultValue;
};

export default App;
import React, {useState} from 'react'

function AddTodoForm({ addTodo }) {
    const [task, setTask] = useState('');

    const handleAddTodo = () => {
        if (task.trim() !== '') {
            addTodo(task);
            setTask('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder='Add a new task'
            />
            <button onClick={handleAddTodo}>Add</button>
        </div>
    );
}

export default AddTodoForm;

import React, { useState } from 'react';

function TodoForm(props) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput = '';
    }
    const handleChange = () => {
        
    }
    return(
    <form className="todo-form" onSubmit={handleSubmit}>
        <input
        placeholder="Add a todo"
        value={input}
        className="todo-input"
        type="text"
        name="text"
        onChange={handleChange}
        />
        <button className="todo-button">Add Todo</button>
    </form>

    );
}
export default TodoForm;
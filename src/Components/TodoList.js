import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
const [todos, setTodos] = useState([])

const addTodo = (todo) => {
    //check if todo has any value (if anything has been typed into the input field)
    if(!todo || /^\s*$/.test(todo.text)) {
        return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);

}

const removeTodo = (id) => {
    const removeArr = [...todos].filter(todo => 
        todo.id !== id);
        setTodos(removeArr);
}
const updateTodo = (todoId, newValue) => {
    if(!newValue || /^\s*$/.test(newValue.text)) {
        return;
    }
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
}

const completeTodo = (id) => {
    let updatedTodos = todos.map(todo => {
        if(todo.id === id) {
            todo.isComplete = !todo.isComplete;
        }
        return todo;
    })
    setTodos(updatedTodos);
}
return(
    <div>
        <h1>The plan for today is...?</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
);
}
export default TodoList;
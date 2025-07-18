import React, { useState } from 'react';
import Header from './Header';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

export default function TodoApp() {

  const [todos, setTodos] = useState([
    { id: 1, text: 'Planning my day', completed: true },
    { id: 2, text: 'touch typing', completed: true },
    { id: 3, text: 'revising anki cards', completed: true },
    { id: 4, text: 'learn react', completed: true },
    { id: 5, text: 'Class (intro to software engineering)', completed: true },
    { id: 6, text: 'codewars', completed: false },
    { id: 7, text: 'end of day session', completed: true }
  ]);
  
  
  const addTodo = (text) => {
    const newId = Math.max(...todos.map(todo => todo.id), 0) + 1;
    setTodos([...todos, { id: newId, text: text, completed: false }]);
  };
  
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
        <Header />
        <AddTodo onAdd={addTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </div>
    </div>
  );
}
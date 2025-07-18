import React from 'react';
import { X } from 'lucide-react';

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between bg-white p-3 mb-2 rounded-md shadow">
     <label className='flex items-center space-x-3'>
      <input
        type="checkbox"
        check class = "h-3 w-3 text-blue-500"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span className={todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}>
        {todo.text}
      </span>
      </label>
      <div className='text-red-500 hover:text-red-700 text-lg font-bold ml-4'>
        <button onClick={() => onDelete(todo.id)}>
        <X size={14} />
      </button>
      </div>
     
    </div>
  );
}

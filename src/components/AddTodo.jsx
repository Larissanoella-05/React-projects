import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export default function AddTodo({ onAdd }) {
  const [newTodo, setNewTodo] = useState('');

  const handleAdd = () => {
    if (newTodo.trim() !== '') {
      onAdd(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div className="flex items-center mb-5">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add todo..."
        onKeyPress={(e) => e.key === 'Enter' && handleAdd()}
        className='flex-grow outline-none bg-transparent text-gray-600 placeholder-gray-400'
      />
      <button onClick={handleAdd}>
        <Plus size={20} />
      </button>
    </div>
  );
}
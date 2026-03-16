import { useState } from 'react';

const priorityStyles = {
  'düşük':  'bg-green-100 text-green-700',
  'orta':   'bg-yellow-100 text-yellow-700',
  'yüksek': 'bg-red-100 text-red-700',
};

const TodoItem = ({ todo, onDelete, onToggle, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  const handleUpdate = () => {
    if (!editTitle.trim()) return;
    onUpdate(todo.id, editTitle.trim());
    setIsEditing(false);
  };

  return (
    <div className={`bg-white rounded-xl shadow-sm border-l-4 p-4 flex items-center gap-4 transition-all
      ${todo.completed ? 'opacity-50 border-gray-300' : 'border-indigo-500'}`}>

      {/* Checkbox */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5 accent-indigo-600 cursor-pointer flex-shrink-0"
      />

      {/* İçerik */}
      <div className="flex-1 min-w-0">
        {isEditing ? (
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="border border-indigo-300 rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400 text-sm"
            autoFocus
          />
        ) : (
          <p className={`text-gray-800 font-medium truncate ${todo.completed ? 'line-through text-gray-400' : ''}`}>
            {todo.title}
          </p>
        )}
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full mt-1 inline-block ${priorityStyles[todo.priority]}`}>
          {todo.priority}
        </span>
      </div>

      {/* Butonlar */}
      <div className="flex gap-2 flex-shrink-0">
        {isEditing ? (
          <>
            <button onClick={handleUpdate}
              className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded-lg transition-colors">
              Kaydet
            </button>
            <button onClick={() => setIsEditing(false)}
              className="bg-gray-400 hover:bg-gray-500 text-white text-xs px-3 py-1 rounded-lg transition-colors">
              İptal
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)}
              className="bg-amber-400 hover:bg-amber-500 text-white text-xs px-3 py-1 rounded-lg transition-colors">
              Düzenle
            </button>
            <button onClick={() => onDelete(todo.id)}
              className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 rounded-lg transition-colors">
              Sil
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
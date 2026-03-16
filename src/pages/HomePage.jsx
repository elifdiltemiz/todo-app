import { useState } from 'react';
import TodoForm  from '../components/TodoForm';
import TodoList  from '../components/TodoList';
import StatsBar  from '../components/StatsBar';
import { createTodo } from '../interfaces/Todo';

const HomePage = () => {
  const [todos,  setTodos]  = useState([
    createTodo(1, 'React öğren',    'yüksek'),
    createTodo(2, 'Tailwind dene',  'orta'),
    createTodo(3, 'Proje teslim et','düşük'),
  ]);
  const [filter, setFilter] = useState('hepsi');

  // EKLE
  const handleAdd = (title, priority) => {
    const newTodo = createTodo(Date.now(), title, priority);
    setTodos((prev) => [newTodo, ...prev]);
  };

  // SİL
  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  // TAMAMLA / GERİ AL
  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((t) => t.id === id ? { ...t, completed: !t.completed } : t)
    );
  };

  // GÜNCELLE
  const handleUpdate = (id, newTitle) => {
    setTodos((prev) =>
      prev.map((t) => t.id === id ? { ...t, title: newTitle } : t)
    );
  };

  // FİLTRELE
  const filtered = todos.filter((t) => {
    if (filter === 'aktif')     return !t.completed;
    if (filter === 'tamamlanan') return  t.completed;
    return true;
  });

  return (
    // Layout: ortalanmış max-w container
    <main className="max-w-2xl mx-auto px-4 py-8">
      <StatsBar todos={todos} />
      <TodoForm onAdd={handleAdd} />

      {/* Filtre butonları */}
      <div className="flex gap-2 mb-4">
        {['hepsi', 'aktif', 'tamamlanan'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors capitalize
              ${filter === f
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <TodoList
        todos={filtered}
        onDelete={handleDelete}
        onToggle={handleToggle}
        onUpdate={handleUpdate}
      />
    </main>
  );
};

export default HomePage;
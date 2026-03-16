import { useState } from 'react';

const TodoForm = ({ onAdd }) => {
  const [title, setTitle]       = useState('');
  const [priority, setPriority] = useState('orta');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title.trim(), priority);
    setTitle('');
    setPriority('orta');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Yeni Görev Ekle</h2>

      {/* Grid layout: 2 kolon */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          placeholder="Görev adı..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 col-span-1 sm:col-span-1"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="düşük">🟢 Düşük Öncelik</option>
          <option value="orta">🟡 Orta Öncelik</option>
          <option value="yüksek">🔴 Yüksek Öncelik</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition-colors"
      >
        + Görev Ekle
      </button>
    </form>
  );
};

export default TodoForm;
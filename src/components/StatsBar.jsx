const StatsBar = ({ todos }) => {
  const total     = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const remaining = total - completed;

  return (
    // Box layout: 3 kutu yan yana grid
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 text-center">
        <p className="text-2xl font-bold text-indigo-600">{total}</p>
        <p className="text-sm text-gray-500 mt-1">Toplam</p>
      </div>
      <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
        <p className="text-2xl font-bold text-green-600">{completed}</p>
        <p className="text-sm text-gray-500 mt-1">Tamamlanan</p>
      </div>
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
        <p className="text-2xl font-bold text-amber-600">{remaining}</p>
        <p className="text-sm text-gray-500 mt-1">Bekleyen</p>
      </div>
    </div>
  );
};

export default StatsBar;
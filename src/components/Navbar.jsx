const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl">✅</span>
          <h1 className="text-xl font-bold tracking-wide">TodoApp</h1>
        </div>
        <span className="text-indigo-200 text-sm">Görev Yöneticisi</span>
      </div>
    </nav>
  );
};

export default Navbar;
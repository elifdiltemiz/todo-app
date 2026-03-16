import TodoItem from './TodoItem';

const TodoList = ({ todos, onDelete, onToggle, onUpdate }) => {
  if (todos.length === 0) {
    return (
      <div className="text-center py-16 text-gray-400">
        <p className="text-5xl mb-4">📭</p>
        <p className="text-lg">Henüz görev yok. Yukarıdan ekleyin!</p>
      </div>
    );
  }

  return (
    // Flex column layout — her item alt alta
    <div className="flex flex-col gap-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default TodoList;
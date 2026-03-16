// Todo nesnesinin yapısını tanımlar
// { id, title, completed, priority }
export const createTodo = (id, title, priority = 'orta') => ({
  id,
  title,
  completed: false,
  priority,
});
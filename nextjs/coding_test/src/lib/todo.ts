export type Todo = {
  id: number | null;
  title: string;
  description: string | null;
}

export const getTodos = (): Todo[] => {
  const todos: Todo[] = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key));
    todos.push(value as Todo);
  }
  return todos;
};

export const getTodo = (id: number): Todo => {
  const todo = JSON.parse(localStorage.getItem(String(id)));
  return todo as Todo;
};

export const updateTodo = (id: string, title: string, description: string): Todo => {
  localStorage.removeItem(id);

  const todo: Todo = {
    id: Number(id),
    title,
    description,
  };

  localStorage.setItem(id, JSON.stringify(todo));

  return todo;
};

export const addTodo = (title: string, description: string | null): Todo => {
  const id = localStorage.length + 1;
  const todo: Todo = {
    id,
    title,
    description,
  };

  localStorage.setItem(String(id), JSON.stringify(todo));

  return todo;
};

export const removeTodo = (id: number) => {
  localStorage.removeItem(String(id));
};

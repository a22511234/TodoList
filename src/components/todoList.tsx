import { Todo } from "../types/todo";
import TodoItem from "./todoItem";
interface todoListProps {
  todos: Todo[];
  onCompletedChange: (id: number, completed: boolean) => void;
  onDeleted: (id: number) => void;
}
export default function TodoList({
  todos,
  onCompletedChange,
  onDeleted,
}: todoListProps) {
  const todosSorted = todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return b.id - a.id;
    }
    return a.completed ? 1 : -1;
  });
  return (
    <>
      <div className="space-y-2">
        {todosSorted.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            onCompletedChange={onCompletedChange}
            onDeleted={onDeleted}
          />
        ))}
      </div>
      {todos.length === 0 && (
        <p className="text-center text-gray-400 text-sm">
            No todos yet. Add some todos to get started!
        </p>
      )}
    </>
  );
}

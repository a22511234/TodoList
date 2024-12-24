import { useEffect, useState } from "react";
import { Todo } from "../types/todo";
import { dummyData } from "../data/todos";

export default function useTodos() {
    const [todos, setTodos] = useState<Todo[]>(()=>{
        const savedTodos = JSON.parse(localStorage.getItem('todos') || '[]');
        return savedTodos.length ? savedTodos : dummyData;
      });
      useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
      },[todos]);
      function setTodoCompleted(id: number, completed: boolean) {
        // alert('Todo with id ' + id + ' is ' + (completed ? 'completed' : 'not completed'))
        setTodos((prevTodos) =>
          prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
        );
      }
      function addTodo(title: string) {
        setTodos((prevTodos) => [
          {
            id: Date.now(),
            title,
            completed: false,
          },
          ...prevTodos,
        ]);
      }
      function deleteTodo(id: number) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      }
      function deleteAllCompleted() {
        setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
      }
        return {
            todos,
            setTodoCompleted,
            addTodo,
            deleteTodo,
            deleteAllCompleted,
    }
}
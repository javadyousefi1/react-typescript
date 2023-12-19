import { useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
import Header from "../components/Header";
import AddTodoForm from "../components/AddTodoForm";

export type NewTodo = {
  id: number;
  title: string;
  isComplete: boolean;
};

const HomePage = () => {
  const [todos, setTodos] = useState<NewTodo[]>([]);

  const handleSetNewTodo = (newTodo: NewTodo): void => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleDeleteTodo = (id: number): void => {
    // filter todos by id
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleToggleIsCompleted = (id: number): void => {
    // toggle the is completed status by id
    setTodos((prevTodos) =>
      prevTodos.map((obj) =>
        obj.id === id ? { ...obj, isComplete: !obj.isComplete } : obj
      )
    );
  };

  return (
    <>
      <div className="w-full h-screen bg-primary flex justify-center items-center px-3 md:px-0">
        <div className="w-[500px] bg-light_primary px-5 py-7 rounded-lg flex flex-col gap-y-6">
          {/* header */}
          <Header
            title="Todo App"
            description="created by using React + Typescript"
          />
          {/* add todo form */}
          <AddTodoForm onAdd={handleSetNewTodo} />
          {/* todo list */}
          <div className=" max-h-[320px] overflow-y-auto flex flex-col gap-y-3">
            {todos.length === 0 && (
              <p className="text-center text-primary text-xs my-4">
                You did not add new todo yet
              </p>
            )}
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                title={todo.title}
                isComplete={todo.isComplete}
                onDelete={handleDeleteTodo}
                onComplete={handleToggleIsCompleted}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

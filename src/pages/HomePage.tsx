import { ReactNode, useEffect, useState } from "react";
import TodoItem from "../components/TodoItem";
import Header from "../components/Header";
import AddTodoForm from "../components/AddTodoForm";
import InfoBox from "../components/InfoBox";

export type NewTodo = {
  id: number;
  title: string;
  isComplete: boolean;
};

const HomePage = () => {
  const [todos, setTodos] = useState<NewTodo[]>([]);

  useEffect(() => {
    const todosFromLocalStorage = localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos")!)
      : [];

    console.log(todosFromLocalStorage);

    setTodos(todosFromLocalStorage);
  }, []);

  const handleSaveLocalStorage = (newData: NewTodo[]) => {
    localStorage.setItem("todos", JSON.stringify(newData));
  };

  const handleSetNewTodo = (newTodo: NewTodo): void => {
    const todo = [...todos, newTodo];

    setTodos(todo);
    handleSaveLocalStorage(todo);
  };

  const handleDeleteTodo = (id: number): void => {
    const filteredTodo = todos.filter((todo) => todo.id !== id);
    // filter todos by id
    setTodos(filteredTodo);
    handleSaveLocalStorage(filteredTodo);
  };

  const handleToggleIsCompleted = (id: number): void => {
    const toggleTodo = todos.map((obj) =>
      obj.id === id ? { ...obj, isComplete: !obj.isComplete } : obj
    );

    // toggle the is completed status by id
    setTodos(toggleTodo);
    handleSaveLocalStorage(toggleTodo);
  };

  let warning: ReactNode;

  if (todos.length >= 4) {
    warning = (
      <InfoBox mode="warn" title="title">
        you added very todos , do not add multiplie tasks
      </InfoBox>
    );
  }
  if (todos.length === 0) {
    warning = <InfoBox mode="hint">Add some todos...</InfoBox>;
  }

  return (
    <>
      <div className="flex items-center justify-center w-full h-screen px-3 bg-primary md:px-0">
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
            {warning}
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

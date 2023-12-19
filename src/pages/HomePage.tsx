import { type FormEvent, useState, useRef } from "react";
import toast from "react-hot-toast";
import TodoItem from "../components/TodoItem";
import Header from "../components/Header";

const HomePage = () => {
  type NewTodo = {
    id: number;
    title: string;
  };

  const [todos, setTodos] = useState<NewTodo[]>([]);

  const inputValue = useRef<HTMLInputElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    // prevent refresh page
    e.preventDefault();

    const newTodoValue = inputValue.current!.value;
    // prevent add empty todo
    if (newTodoValue.trim() === "") {
      // reset form
      e.currentTarget.reset();
      // prevent excute other expressions
      return;
    }
    // set new todo
    setTodos((prevTodo) => [
      ...prevTodo,
      { title: newTodoValue, id: new Date().getTime() },
    ]);
    // reset form
    e.currentTarget.reset();
    // show succ toast
    toast.success("your todo added successfully");
  };

  return (
    <>
      <div className="w-full h-screen bg-primary flex justify-center items-center px-3 md:px-0">
        <div className="w-[500px] bg-light_primary px-5 py-7 rounded-lg">
          {/* header */}
          <Header
            title="Todo App"
            description="created by using React + Typescript"
          />
          {/* add todo form */}
          
          <form onSubmit={onSubmit}>
            <div className="flex gap-x-3 mt-10">
              <input
                ref={inputValue}
                type="text"
                className="w-full px-3 py-2 rounded-lg bg-main_white outline-none"
                placeholder="write here ..."
              />
              <button className="whitespace-nowrap bg-primary rounded-lg text-main_white px-3">
                Add Todo
              </button>
            </div>
          </form>

          {/* todo list */}
          <div className="mt-10 max-h-[320px] overflow-y-auto">
            {todos.map((todo) => (
              <TodoItem key={todo.id} title={todo.title} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;

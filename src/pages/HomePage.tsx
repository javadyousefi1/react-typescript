import { type FormEvent, useState, useRef } from "react";
import toast from "react-hot-toast";

const HomePage = () => {
  type NewTodo = {
    title: string;
  };

  const [todos, setTodos] = useState<NewTodo[]>([]);
  console.log(todos);
  const inputValue = useRef<HTMLInputElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    // prevent refresh page
    e.preventDefault();

    const newTodoValue = inputValue.current!.value;
    // prevent add empty todo
    if (newTodoValue === "") return;
    // set new todo
    setTodos((prevTodo) => [...prevTodo, { title: newTodoValue }]);
    // reset form
    e.currentTarget.reset();
    // show succ toast
    toast.success("your todo added successfully");
  };

  return (
    <>
      <div className="w-full h-screen bg-primary flex justify-center items-center">
        <div className="w-[500px] bg-light_primary px-5 py-7 rounded-lg">
          {/* header */}
          <div>
            <h1 className="text-primary text-2xl text-center font-bold">
              Add Todo
            </h1>
            <h3 className="text-secondary text-md text-center font-bold">
              created by React + Typescript
            </h3>
          </div>

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
        </div>
      </div>
    </>
  );
};

export default HomePage;

import { type FormEvent, useRef } from "react";
// toast
import toast from "react-hot-toast";
import { type NewTodo } from "../pages/HomePage";

type AddTodoFormProps = {
  onAdd: (newTodo: NewTodo) => void;
};

const AddTodoForm = ({ onAdd }: AddTodoFormProps) => {
  const inputValue = useRef<HTMLInputElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
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
    onAdd({ title: newTodoValue, id: new Date().getTime() });
    // reset form
    e.currentTarget.reset();
    // show succ toast
    toast.success("your todo added successfully");
  };
  return (
    <>
      {" "}
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
    </>
  );
};

export default AddTodoForm;

import { type ComponentPropsWithoutRef } from "react";

type InputProps = {
  id: string;
  label: string;
} & ComponentPropsWithoutRef<"input">;

const Input = ({ id, label, ...props }: InputProps) => {
  return (
    <p className="flex flex-col mt-3 gap-y-3">
      <label className="text-main_white" htmlFor={id}>
        {label} :{" "}
      </label>
      <input
        id={id}
        type="text"
        className="px-3 py-2 font-bold rounded-lg outline-none"
        {...props}
      />
    </p>
  );
};

export default Input;

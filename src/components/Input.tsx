type InputProps = {
  id: string;
  label: string;
};

const Input = ({ id, label }: InputProps) => {
  return (
    <p className="flex flex-col gap-y-3">
      <label className="text-main_white" htmlFor={id}>{label} : </label>
      <input id={id} type="text" className="px-3 py-2 font-bold rounded-lg outline-none"/>
    </p>
  );
};

export default Input;

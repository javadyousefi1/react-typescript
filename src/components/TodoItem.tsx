export type NewTodo = {
  id: number;
  title: string;
  isComplete: boolean;
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
};

const TodoItem = ({ title, id, onDelete, onComplete, isComplete }: NewTodo) => {
  const todoSvgIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7ZM17.5 17.08h-1.85M12.97 17.08H6.5M17.5 13.32h-5.53M9.27 13.32H6.5"
        stroke="#352F44"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );

  return (
    <div
      className={`p-5 bg-secondary w-[calc(100%-10px)] rounded-lg flex justify-between bg-opacity-70 transition-all ease-linear duration-150 ${
        isComplete && "bg-opacity-35"
      }`}
    >
      <div className="text-main_white flex gap-x-2">
        {todoSvgIcon}

        <span title={title} className={`${isComplete && "line-through"}`}>
          {title.length > 20 ? title.slice(0, 5) + "..." : title}
        </span>
      </div>
      {/* icons */}
      <div className="flex gap-x-3">
        <button
          onClick={() => {
            onDelete(id);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21 5.98c-3.33-.33-6.68-.5-10.02-.5-1.98 0-3.96.1-5.94.3L3 5.98M8.5 4.97l.22-1.31C8.88 2.71 9 2 10.69 2h2.62c1.69 0 1.82.75 1.97 1.67l.22 1.3M18.85 9.14l-.65 10.07C18.09 20.78 18 22 15.21 22H8.79C6 22 5.91 20.78 5.8 19.21L5.15 9.14M10.33 16.5h3.33M9.5 12.5h5"
              stroke="#f58f8f"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <button
          onClick={() => {
            onComplete(id);
          }}
        >
          {isComplete ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="m9.17 14.83 5.66-5.66M14.83 14.83 9.17 9.17M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
                stroke="#FAF0E6"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
                stroke="#FAF0E6"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="m7.75 12 2.83 2.83 5.67-5.66"
                stroke="#FAF0E6"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;

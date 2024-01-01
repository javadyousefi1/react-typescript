import { type ReactNode } from "react";

type warning = {
  mode: "warn";
  children: ReactNode;
  title: string;
};
type hint = {
  mode: "hint";
  children: ReactNode;
};

// relate props to other props
type InfoBoxProps = warning | hint;

const InfoBox = (props: InfoBoxProps) => {
  // commen props
  const { children, mode } = props;

  // render jsx base on mode props
  if (mode === "warn") {
    const { title } = props;

    return (
      <>
        <aside className="flex flex-col w-[calc(100%-10px)] items-center justify-center p-2 text-red-500 border border-red-500 rounded-md gap-y-2">
          <h1 className="text-xl">{title}</h1>
          <p>{children}</p>
        </aside>
      </>
    );
  }

  //   default render
  return (
    <>
      <aside className="flex flex-col items-center justify-center p-2 text-yellow-300 border border-yellow-300 rounded-md gap-y-2">
        <h1 className="text-xl">hint</h1>
        <p>{children}</p>
      </aside>
    </>
  );
};

export default InfoBox;

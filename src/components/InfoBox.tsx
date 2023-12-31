import { type ReactNode } from "react";

type InfoBoxProps = {
  mode: "warn" | "hint";
  children: ReactNode;
  title?: string;
};

const InfoBox = ({ mode, children, title = "warning" }: InfoBoxProps) => {
  if (mode === "warn") {
    return (
      <>
        <aside className="flex flex-col w-[calc(100%-10px)] items-center justify-center p-2 text-yellow-300 border border-yellow-300 rounded-md gap-y-2">
          <h1 className="text-xl">{title}</h1>
          <p>{children}</p>
        </aside>
      </>
    );
  }

  return (
    <>
      <aside className="flex flex-col items-center justify-center p-2 text-yellow-300 border border-yellow-300 rounded-md gap-y-2">
        <h1 className="text-xl">warning</h1>
        <p>{children}</p>
      </aside>
    </>
  );
};

export default InfoBox;

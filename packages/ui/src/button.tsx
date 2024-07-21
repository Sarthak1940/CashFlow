"use client";

import { ReactNode } from "react";

export const Button = ({ onClick, children, disabled, colour }: 
  {onClick: () => void, 
  children: ReactNode, 
  disabled: boolean,
  colour?: string
}) => {
  return (
    <button onClick={onClick} disabled={disabled} type="button" className={`text-white font-medium rounded-full  ${colour} outline outline-1 text-bold px-6 py-3 text-center mb-2`}>
      {children}
    </button>

  );
};

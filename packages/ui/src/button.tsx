"use client";

import { ReactNode } from "react";

export const Button = ({ onClick, children, disabled }: 
  {onClick: () => void, 
  children: ReactNode, 
  disabled: boolean
}) => {
  return (
    <button onClick={onClick} type="button" disabled={disabled} className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
      {children}
    </button>

  );
};

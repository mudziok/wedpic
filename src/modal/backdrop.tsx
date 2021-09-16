import { FC } from "react";

export const Backdrop:FC = ({children}) => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-80 flex justify-center items-center">
      {children}
    </div>
  )
}
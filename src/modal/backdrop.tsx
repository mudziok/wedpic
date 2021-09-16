import { FC } from "react";

interface backdropProps {
  children: any,
  onClick?: () => void
}

export const Backdrop:FC<backdropProps> = ({children, onClick}) => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-black bg-opacity-80 flex justify-center items-center"
      onClick={onClick}>
      {children}
    </div>
  )
}
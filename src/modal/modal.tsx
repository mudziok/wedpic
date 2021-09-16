import { FC } from "react";

import { Backdrop } from "./backdrop"

export const Modal:FC = ({children}) => {
  return (
    <Backdrop>
      <div className="bg-white shadow rounded-xl max-w-xs md:max-w-md">
        <div className="m-5 text-center">
          {children}
        </div>
      </div>
    </Backdrop>
  )
}
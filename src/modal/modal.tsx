import { FC } from "react";
import { motion } from "framer-motion"
import { Backdrop } from "./backdrop"

interface modalProps {
  children: any,
  onClickOut?: () => void
}

export const Modal:FC<modalProps> = ({children, onClickOut}) => {
  return (
    <Backdrop
     onClick={onClickOut}>
      <motion.div
        onClick={(e) => {e.stopPropagation()}}
        className="bg-white shadow rounded-xl max-w-xs md:max-w-md"
        initial={{ opacity: 0, y: "-100vh" }}
        animate={{ opacity: 1, y: "0", transition: {duration: 0.2, type: "spring", damping: 25, stiffness: 250}}}
        exit={{ opacity: 0, y: "100vh" }}
      >
        <div className="m-5 text-center">
          {children}
        </div>
      </motion.div>
    </Backdrop>
  )
}
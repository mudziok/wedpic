import { FC } from "react"
import { motion } from 'framer-motion';

interface buttonWithIconProps {
  icon?: JSX.Element
  text?: String
  onClick?: () => void
}

export const ButtonWithIcon:FC<buttonWithIconProps> = ({icon, text, onClick}) => {
  return (
    <motion.button className="p-2 m-2 flex flex-col justify-center items-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}>
      {icon} {text}
    </motion.button>
  )
}
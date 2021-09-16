import { FC } from "react"
import { motion } from 'framer-motion';

interface buttonWithIconProps {
  icon: JSX.Element
  onClick?: () => void
}

export const ButtonWithIcon:FC<buttonWithIconProps> = (props) => {
  return (
    <motion.button className="p-2 m-2"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={props.onClick}>
      {props.icon}
    </motion.button>
  )
}
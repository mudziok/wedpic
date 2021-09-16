import { FC } from "react";
import { Modal } from "../modal/modal";
import { ButtonWithIcon } from "../utility/buttonWithIcon";
import { iconCamera } from "../utility/icons";

interface thankYouModalProps {
  onExit: () => void
}

export const ThankYouModal:FC<thankYouModalProps> = ({onExit}) => {
  return (
    <Modal>
      <div className='flex flex-col justify-center items-center'>
        <span className="text-xl p-2">Dziękujemy za wysłanie zdjęcia!</span>
        <ButtonWithIcon
          text={"Zrób kolejne zdjęcie"}
          icon={iconCamera}
          onClick={onExit}
        />
      </div>
    </Modal>
  )
}
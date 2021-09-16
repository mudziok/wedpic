import { FC } from "react";
import { Modal } from "../modal/modal";
import { ButtonWithIcon } from "../utility/buttonWithIcon";

interface thankYouModalProps {
  onExit: () => void,
  onClickOut?: () => void
}

export const ThankYouModal:FC<thankYouModalProps> = ({onExit, onClickOut}) => {
  return (
    <Modal
      onClickOut={onClickOut}>
      <div className='flex flex-col justify-center items-center space-y-5'>
        <span className="text-xl p-2">Dziękujemy za wysłanie zdjęcia!</span>
        <div className="border rounded-xl">
          <ButtonWithIcon
            text={"Zrób kolejne zdjęcie"}
            onClick={onExit}
          />
        </div>
      </div>
    </Modal>
  )
}
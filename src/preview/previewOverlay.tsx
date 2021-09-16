import { FC } from "react"
import { ButtonWithIcon } from "../utility/buttonWithIcon"
import { exitIcon, paperPlaneIcon } from "./previewIcons"

interface previewOverlayInterface {
  onExit: () => void
}

export const PreviewOverlay:FC<previewOverlayInterface> = ({onExit}) => {
  return (
    <div className="w-full h-full flex flex-col-reverse text-white">
      <div className="w-full flex justify-around">
        <ButtonWithIcon 
          icon={paperPlaneIcon}
          text={"Wyślij zdjęcie"}
          onClick={()=>{}}
        />
        </div>
        <div className="w-full flex justify-start mb-auto">
          <ButtonWithIcon 
            icon={exitIcon}
            onClick={onExit}
          />
      </div>
    </div>
  )
}
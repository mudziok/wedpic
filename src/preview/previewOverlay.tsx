import { FC } from "react"
import { ButtonWithIcon } from "../utility/buttonWithIcon"
import { exitIcon, paperPlaneIcon } from "../utility/icons"

interface previewOverlayInterface {
  onExit: () => void,
  onUpload: () => void
}

export const PreviewOverlay:FC<previewOverlayInterface> = ({onExit, onUpload}) => {
  return (
    <div className="w-full h-full flex flex-col-reverse text-white">
      <div className="w-full flex justify-around">
        <ButtonWithIcon 
          icon={paperPlaneIcon}
          text={"Wyślij zdjęcie"}
          onClick={onUpload}
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
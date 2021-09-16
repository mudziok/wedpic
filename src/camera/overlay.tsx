import { FC } from "react"
import { ButtonWithIcon } from "./buttonWithIcon"
import { iconUpload, iconCamera, iconSwitch } from "./overlayIcons"

interface OverlayProps {
  onSwitchFacing: () => void,
  onCapturePhoto: () => void,
  onUploadPhoto: () => void
}

export const Overlay:FC<OverlayProps> = (props) => {
  return (
    <div className="w-full h-full flex flex-col-reverse text-white">
      <div className="w-full flex justify-around">
        <ButtonWithIcon 
          icon={iconUpload} 
          onClick={props.onUploadPhoto}/>
        <ButtonWithIcon 
          icon={iconCamera} 
          onClick={props.onCapturePhoto}/>
        <ButtonWithIcon 
          icon={iconSwitch} 
          onClick={props.onSwitchFacing} />
      </div>
    </div>
  )
}
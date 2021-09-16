import { useRef, useState, useCallback, ChangeEvent, FC } from "react";
import Webcam from "react-webcam";
import { CameraOverlay } from "./cameraOverlay";
import { urlToFile } from "../utility/urlToFile";

interface cameraProps {
  onFileSelected: (f: File) => void
}

export const Camera:FC<cameraProps> = ({onFileSelected}) => {
  const webcamRef = useRef<Webcam>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isFrontFacing, setFrontFacing] = useState(true);

  const flipFacingMode = () => {
    setFrontFacing(!isFrontFacing);
  }

  const capture = useCallback(async () => {
    if (webcamRef.current) {
      const screenSrc = webcamRef.current.getScreenshot();
      if (screenSrc) {
        const screenFile = await urlToFile(screenSrc, "photo.jpeg", 'image/jpeg')
        onFileSelected(screenFile);
      }
    }
  }, [webcamRef, onFileSelected]);

  const openFileSelector = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const uploadLocal = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files) {
      const screenFile = event.currentTarget.files[0]
      onFileSelected(screenFile);
    }
  }

  return (
    <div className="w-full h-full flex justify-center items-center">
      <Webcam
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        mirrored={isFrontFacing}
        videoConstraints={{facingMode: isFrontFacing ? "user" : { exact: "environment" }}}
      />
      <div className="fixed top-0 left-0 w-screen h-screen">
        <input className="hidden"
          type="file" ref={fileInputRef}
          accept="image/png, image/jpg, image/jpeg, .heic"
          onChange={uploadLocal}
        />
        <CameraOverlay
          onSwitchFacing={flipFacingMode}
          onCapturePhoto={capture}
          onUploadPhoto={openFileSelector}
        />
      </div>
    </div>
    )
}
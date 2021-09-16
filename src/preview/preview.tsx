import { FC, useEffect, useState } from 'react';
import { PreviewOverlay } from './previewOverlay';

interface previewProps {
  photo: File | null,
  onExit: () => void
}

export const Preview:FC<previewProps> = ({photo, onExit}) => {
  const [imgUrl, setImgUrl] = useState<string | null>(null)

  useEffect(() => {
    const newUrl = URL.createObjectURL(photo)
    setImgUrl(newUrl)
    return () => {
      if (newUrl) {
        URL.revokeObjectURL(newUrl)
      }
    }
  }, [photo])

  return (
    <div className="w-full h-full flex justify-center items-center overflow-hidden">
      {imgUrl &&
        <img src={imgUrl} alt="Preview" className="w-full"/>
      }
      <div className="fixed top-0 left-0 w-screen h-screen">
        <PreviewOverlay
          onExit={onExit}
        />
      </div>
    </div>
  )
}
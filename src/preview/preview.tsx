import { FC, useEffect, useState } from 'react';
import { PreviewOverlay } from './previewOverlay';
import { ThankYouModal } from './thankYouModal';
import { UploadModal } from './uploadModal';

interface previewProps {
  photo: File | null,
  onExit: () => void
}

const enum uploadState {
  PREVIEW,
  UPLOAD,
  THANK_YOU,
}

export const Preview:FC<previewProps> = ({photo, onExit}) => {
  const [imgUrl, setImgUrl] = useState<string | null>(null)
  const [upState, setUpState] = useState(uploadState.PREVIEW)

  useEffect(() => {
    const newUrl = URL.createObjectURL(photo)
    setImgUrl(newUrl)
    return () => {
      if (newUrl) {
        URL.revokeObjectURL(newUrl)
      }
    }
  }, [photo])

  const uploadImg = (f: File | null) => {
    setUpState(uploadState.UPLOAD)
    setTimeout(()=>{setUpState(uploadState.THANK_YOU)}, 1000)
  }

  return (
    <div className="w-full h-full flex justify-center items-center overflow-hidden">
      {imgUrl &&
        <img src={imgUrl} alt="Preview" className="w-full"/>
      }
      <div className="fixed top-0 left-0 w-screen h-screen">
        <PreviewOverlay
          onExit={onExit}
          onUpload={() => uploadImg(photo)}
        />
      </div>
      { upState === uploadState.UPLOAD &&
        <UploadModal />
      }
      { upState === uploadState.THANK_YOU &&
        <ThankYouModal
          onExit={onExit}
        />
      }
    </div>
  )
}
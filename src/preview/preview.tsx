import axios from 'axios';
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

  const uploadImg = async (photo: File | null, album: String) => {
    setUpState(uploadState.UPLOAD)

    try {
      const getUrlResponse = await axios({
        method: "GET",
        params: {
          "album": album
        },
        url: "https://ig8lbj6eod.execute-api.eu-central-1.amazonaws.com/default/album-lambda"
      })

      const uploadURL = getUrlResponse.data.uploadURL;

      const result = await fetch(uploadURL, {
        method: 'PUT',
        body: photo
      })

      console.log(result)
    } finally {
      setUpState(uploadState.THANK_YOU)
    }
  }

  return (
    <div className="w-full h-full flex justify-center items-center overflow-hidden">
      {imgUrl &&
        <img src={imgUrl} alt="Preview" className="w-full"/>
      }
      <div className="fixed top-0 left-0 w-screen h-full">
        <PreviewOverlay
          onExit={onExit}
          onUpload={() => uploadImg(photo, window.location.pathname.substring(1))}
        />
      </div>
      { upState === uploadState.UPLOAD &&
        <UploadModal />
      }
      { upState === uploadState.THANK_YOU &&
        <ThankYouModal onExit={onExit} onClickOut={onExit}/>
      }
    </div>
  )
}
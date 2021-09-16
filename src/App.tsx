import { FC, useState } from 'react';
import './App.css';
import { Camera } from './camera/camera';
import { Preview } from './preview/preview';

const App:FC = () => {
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [isTakingPhoto, setIsTakingPhoto] = useState<boolean>(true);

  const processFile = (f: File) => {
    setImgFile(f)
    setIsTakingPhoto(false)
  }

  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-black">
      { isTakingPhoto
        ? <Camera onFileSelected={processFile} />
        : <Preview photo={imgFile} onExit={() => {setIsTakingPhoto(true)}}/>
      }
    </div>
  );
}

export default App;

import { FC, useEffect, useState } from 'react';
import './App.css';
import { Camera } from './camera/camera';
import { Preview } from './preview/preview';

const App:FC = () => {
  const [imgFile, setImgFile] = useState<File | null>(null);
  const [isTakingPhoto, setIsTakingPhoto] = useState<boolean>(true);

  const handleResize = () => { 
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  const processFile = (f: File) => {
    setImgFile(f)
    setIsTakingPhoto(false)
  }

  return (
    <div className="fixed top-0 left-0 w-screen h-fix bg-black" >
      { isTakingPhoto
        ? <Camera onFileSelected={processFile} onUserMedia={handleResize}/>
        : <Preview photo={imgFile} onExit={() => {setIsTakingPhoto(true)}}/>
      }
    </div>
  );
}

export default App;

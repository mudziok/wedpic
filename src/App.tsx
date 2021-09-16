import { FC, useState } from 'react';
import './App.css';
import { Camera } from './camera/camera';

const App:FC = () => {
  const [imgFile, setImgFile] = useState<File | null>(null);
  // eslint-disable-next-line
  const [isTakingPhoto, setIsTakingPhoto] = useState<boolean>(true);

  const processFile = (f: File) => {
    setImgFile(f)
    console.log(imgFile, f)
  }

  return (
    <div className="w-screen h-screen bg-black">
      <Camera
        onFileSelected={processFile}
      />
    </div>
  );
}

export default App;

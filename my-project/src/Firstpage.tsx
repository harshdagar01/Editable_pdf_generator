import  { useState, useRef } from 'react';
import Firstimage from './assets/Firstimage.svg';

function Firstpage() {
  const [title1, setTitle1] = useState('Sustainability:');
  const [title2, setTitle2] = useState('A brief overview');
  const [imageSrc, setImageSrc] = useState(Firstimage);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleTitle1Change = (e: any) => {
    setTitle1(e.target.value);
  };

  const handleTitle2Change = (e:any) => {
    setTitle2(e.target.value);
  };

  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
// used to change the file
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-[585px]">
      <img
        className="h-[595px] w-full"
        src={imageSrc}
        alt="image"
        onClick={handleImageClick}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="m-4"
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
      <div className="flex flex-col items-start m-10">
        {/* font-helvetica-neue */}
        <input
          type="text"
          value={title1}
          onChange={handleTitle1Change}
          className="text-2xl text-green-700 mb-2"
        />
        {/* font-helvetica-neue */}
        <input
          type="text"
          value={title2}
          onChange={handleTitle2Change}
          className="text-2xl  text-green-700"
        />
      </div>
      <div className="w-full flex items-center mt-40">
        <div className="flex-grow border-t w-[8%] border-green-700"></div>
        <span className="text-green-700 px-2 w-[30%] text-xs">
          ESG Report 2023-2024
        </span>
        <div className="flex-grow border-t border-green-700 w-[80%]"></div>
        <span className="text-green-700 px-2">1</span>
        <div className="flex-grow border-t border-green-700 w-[5%]"></div>
      </div>
    </div>
  );
}

export default Firstpage;
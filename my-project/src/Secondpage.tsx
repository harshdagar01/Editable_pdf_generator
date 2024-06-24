import React, { useState } from "react"; // Import React and useState
import Secondimage from "./assets/Secondimage.svg"; // Import Secondimage

function Secondpage() {
  // const [companyName, setCompanyName] = useState("Sample Company Name ,India");
  // const [paragraph1, setParagraph1] = useState(
  //   "At, we think that the key to our success is our ability to support our society economically and socially and fulfill our responsibility towards the planet Earth. We have sustained our business expeditions for more than a century now and innovation is the nucleus powering it through. The symbiosis of environmental sustainability and innovation has played a crucial role in our growth process. We consistently leverage this connection to create abundant opportunities for decarbonization along company empowerment."
  // );
  // const [paragraph2, setParagraph2] = useState(
  //   "We continue to be dedicated to going beyond minimal compliance standards to bring about permanent change and create a sustainable and inclusive future for all."
  // );
   const [imageSrc, setImageSrc] = useState(Secondimage);

  // const handleCompanyNameChange = (e) => {
  //   setCompanyName(e.target.value);
  // };

  // const handleParagraph1Change = (e) => {
  //   setParagraph1(e.target.value);
  // };

  // const handleParagraph2Change = (e) => {
  //   setParagraph2(e.target.value);
  // };

  const handleImageClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.style.display = "none";
    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageSrc(reader.result);
        };
        reader.readAsDataURL(file);
      }
    });
    fileInput.click();
  };

  return (
    <div>

      <div className="w-[585px]">
        
        <img
          className="h-[595px] w-full"
          src={imageSrc}
          alt="image"
          onClick={handleImageClick}
        />
        <div>
          {/* font-helvetica-neue-lt-std */}
          {/* <input
            type="text"
            value={companyName}
            onChange={handleCompanyNameChange}
            className="text-xl mb-10  font-size-18 font-weight-700 line-height-21.6 text-green-700 w-full"
          /> */}
          

          <p className="text-xl mb-10 font-size-18 font-weight-700 line-height-21.6 text-green-700 w-full" contentEditable>Sample Company Name ,India</p>

          
          {/* font-helvetica-neue-lt-std */}
          {/* <textarea
            value={paragraph1}
            onChange={handleParagraph1Change}
            className=" font-size-10 font-weight-300 line-height-12 w-full mb-4"
          /> */}

           <p className="font-size-10 font-weight-300 line-height-12 w-full mb-4 text-justify" contentEditable>At, we think that the key to our success is our ability to support our society economically and socially and fulfill our responsibility towards the planet Earth. We have sustained our business expeditions for more than a century now and innovation is the nucleus powering it through. The symbiosis of environmental sustainability and innovation has played a crucial role in our growth process. We consistently leverage this connection to create abundant opportunities for decarbonization along company empowerment.</p>


          {/* font-helvetica-neue-lt-std */}
          {/* <textarea
            value={paragraph2}
            onChange={handleParagraph2Change}
            className="font-size-10 font-weight-300 line-height-12 w-full"
          /> */}

           <p className="font-size-10 font-weight-300 line-height-12 w-full text-justify" contentEditable>We continue to be dedicated to going beyond minimal compliance standards to bring about permanent change and create a sustainable and inclusive future for all.</p>
        </div>
        <div className="w-full flex items-center mt-40">
          <div className="flex-grow border-t w-[8%] border-green-700"></div>
          <span className="text-green-700 px-2 w-[30%] text-xs">
            ESG Report 2023-2024
          </span>
          <div className="flex-grow border-t border-green-700 w-[80%]"></div>
          <span className="text-green-700 px-2">2</span>
          <div className="flex-grow border-t border-green-700 w-[5%]"></div>
        </div>
      </div>
    </div>
  );
}

export default Secondpage;
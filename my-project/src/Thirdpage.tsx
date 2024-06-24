import About1 from "./assets/About1.svg";
import About2 from "./assets/About2.svg";
import About3 from "./assets/About3.svg";
import About4 from "./assets/About4.svg";
import About5 from "./assets/About5.svg";
import { useState, useRef } from "react";


function Thirdpage() {
  const [imageSrc, setImageSrc] = useState(About5);
  const fileInputRef = useRef<HTMLInputElement>(null);
 
  const handleImageClick1 = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange1 = (e) => {
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
    <div>
      <div className="w-[585px]">
        {/* font-helvetica-neue */}
        <p className="text-xl text-green-700 mt-20  mb-5" contentEditable>
          About us
        </p>
        <div className="gap-10">
          <p className="text-justify mb-10" contentEditable>
            Driven by a desire to provide better energy solutions, we have
            emerged as a leader in renewable energy. At our core is relentless
            collaboration and innovation, driving us to make clean energy a
            central part of our planet's future. Our passionate team is
            dedicated to harnessing renewable resources, continually pushing the
            boundaries of affordable and efficient technology.
          </p>

          <p className="text-justify mb-10" contentEditable>
            We believe in open communication and teamwork, fostering a culture
            where diverse perspectives lead to groundbreaking solutions for a
            sustainable future. Our partnerships with industry leaders and
            environmental organizations fuel a global conversation on clean
            energy. Exceeding expectations is our obsession, from consultations
            to installation and maintenance, ensuring you maximize your clean
            energy investment.
          </p>

          <p className="text-justify mb-10" contentEditable>
            We are here to help you transition to renewable energy, whether
            you're a homeowner looking to power your life sustainably, a
            business seeking reduced energy costs, or a municipality building a
            resilient and sustainable infrastructure. Together, we are building
            a movement for a cleaner, energy-efficient tomorrow.
          </p>
        </div>
{/* parent div */}
        <div className="flex flex-col gap-10" contentEditable>
{/* children div */}
          <div className="flex flex-row">
            <div className="flex flex-row flex-1">
              <div>
                <img className="" src={About1} alt="About1" contentEditable />
              </div>
              <div className="text-custom-size" contentEditable>{">14"}</div>
              <div>
                <p className="text-custom-size" contentEditable>
                  {" "}
                  {
                    "Products sold around the world in carpet manufacturing and home furnishing"
                  }{" "}
                </p>
              </div>
            </div>

            <div className="flex flex-row flex-1">
              <div>
                <img className="" src={About2} alt="About1" contentEditable />
              </div>
              <div className="text-custom-size" contentEditable>{"5+"}</div>
              <div className="text-custom-size" contentEditable>
                {"Countries and territories where our products are sold"}
              </div>
            </div>
          </div>

          {/* another child div */}

          <div className="">
            <div className="flex flex-row">
              <div>
                <img src={About3} alt="About1" contentEditable />
              </div>
              <div className="text-custom-size" contentEditable>
                {"~699 Employees~ 1713 Workers"}
              </div>

              <div>
                <div className="flex flex-row flex-1 ml-40">
                  <div>
                    <img src={About4} alt="About1" contentEditable />
                  </div>
                  <div className="text-custom-size" contentEditable>{"4910"}</div>
                  <div className="text-custom-size" contentEditable>
                    {"4910 million Net Revenue in FY 23"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
{/* used for the paragraph */}
        <div className=" text-12px font-medium leading-14.4px text-left mt-10 text-green-700" contentEditable>
          Vision For Climate Change
        </div>

        <div className=" text-10px font-light leading-12px text-left mt-8 text-justify" contentEditable>
          Company vision is to integrate Industry 4.0 principles into our
          operations, demonstrating our commitment to the environment,
          cutting-edge technology, and communities. Through the combination of
          advanced technology and sustainability, we strive to empower our
          customers to lead more sustainable lives at home and work.
        </div>
        {/* image of the text */}
        <div>
        <img
        className="mt-14"
        src={imageSrc}
        alt="image"
        onClick={handleImageClick1}
      />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange1}
        className="m-4"
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
        </div>
      </div>

      {/* used for the footer */}
      <div className="w-full flex items-center mt-40" contentEditable>
        <div className="flex-grow border-t w-[8%] border-green-700"></div>
        <span className="text-green-700 px-2 w-[30%] text-xs">
          ESG Report 2023-2024
        </span>
        <div className="flex-grow border-t border-green-700 w-[80%]"></div>
        <span className="text-green-700 px-2">3</span>
        <div className="flex-grow border-t border-green-700 w-[5%]"></div>
      </div>
    </div>
  );
}

export default Thirdpage;

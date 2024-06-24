import "./App.css";
import Secondpage from "./Secondpage";
import Firstpage from "./Firstpage";
import Thirdpage from "./Thirdpage";
import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import axios from "axios";

function App() {
  const contentRef = useRef<HTMLDivElement>(null);
// used to upload the file on the server
  const handleUpload = async () => {
    if (contentRef.current) {
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm

      const pages = contentRef.current.children;
      for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        const canvas = await html2canvas(page);
        const imgData = canvas.toDataURL("image/png");

        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let scaledHeight = imgHeight;
        let marginY = 0;

        if (imgHeight > pageHeight) {
          const scale = pageHeight / imgHeight;
          scaledHeight = imgHeight * scale;
          marginY = 0;
        } else {
          marginY = (pageHeight - imgHeight) / 2;
        }

        if (i > 0) {
          pdf.addPage();
        }

        pdf.addImage(imgData, "PNG", 0, marginY, imgWidth, scaledHeight);
      }

      // Get the PDF as a blob
      const pdfBlob = pdf.output("blob");

      // Create FormData to send the PDF blob
      const formData = new FormData();
      formData.append("file", pdfBlob, "download.pdf");

      try {
        // Send the PDF to the backend
        await axios.post("http://localhost:5000/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        alert("PDF successfully uploaded to the server.");
      } catch (error) {
        console.error("Error uploading the PDF:", error);
        alert("Failed to upload PDF.");
      }
    }
  };

  // used to directly download the file without sending to the server
  const handleDownload = async () => {
    if (contentRef.current) {
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm

      const pages = contentRef.current.children;
      for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        const canvas = await html2canvas(page);
        const imgData = canvas.toDataURL("image/png");

        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let scaledHeight = imgHeight;
        let marginY = 0;

        if (imgHeight > pageHeight) {
          const scale = pageHeight / imgHeight;
          scaledHeight = imgHeight * scale;
          marginY = 0;
        } else {
          marginY = (pageHeight - imgHeight) / 2;
        }

        if (i > 0) {
          pdf.addPage();
        }

        pdf.addImage(imgData, "PNG", 0, marginY, imgWidth, scaledHeight);
      }

      pdf.save("download.pdf");
    }
  };



  return (
    <div className="w-full">
      {/* Top Button */}
      <div className="flex justify-end p-4 gap-5">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleUpload}
        >
          Upload
        </button>
        {/* downlaod the file direct without passing to the server */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleDownload}
        >
          Download
        </button>
      </div>

      {/* Scrollable Content */}
      <div className="flex justify-center items-center relative h-[730px]">
        <div
          className="overflow-y-scroll h-full w-full max-w-4xl border border-solid border-gray-300 p-4"
          ref={contentRef}
        >
          <div className="flex justify-center">

            <Firstpage />
          </div>
          <div className="flex justify-center">
            
            <Secondpage />
          </div>
          <div className="flex justify-center">
            <Thirdpage />
          </div>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="flex justify-end p-4 gap-5 bg-fixed">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Save
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Next
        </button>
      </div>
    </div>
  );
}

export default App;

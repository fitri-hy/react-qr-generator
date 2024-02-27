import React, { useState } from "react";
import QRCode from "qrcode.react";
import logo from "./logo.svg";

function App() {
  const [text, setText] = useState("");
  const [qrColor, setQrColor] = useState("#e5e5e5");
  const [bgColor, setBgColor] = useState("#171717");
  const [includeMargin, setIncludeMargin] = useState(false);
  const [size, setSize] = useState(256);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const downloadQRCode = () => {
    const qrCode = document.querySelector("canvas");
    const pngUrl = qrCode.toDataURL("image/png");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "qr-code.png";
    downloadLink.click();
  };

  const handleQrColorChange = (event) => {
    setQrColor(event.target.value);
  };

  const handleBgColorChange = (event) => {
    setBgColor(event.target.value);
  };

  const handleIncludeMarginChange = (event) => {
    setIncludeMargin(event.target.checked);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-neutral-900 h-screen p-4">
      <div className="w-full lg:w-3/6 m-auto">
       <img src={logo} className="w-40 h-auto mx-auto" alt="logo" />
       <h1 className="text-neutral-100 text-center text-3xl font-bold">React QRCode Generator</h1>
       <div className="flex mt-12">
          <input
          className="bg-neutral-950 text-neutral-200 border border-cyan-300 p-2 w-full rounded-md"
            type="text"
            value={text}
            onChange={handleChange}
            placeholder="Enter text or url ..."
          />
          <button 
          className="bg-cyan-600 text-white px-2 rounded-md w-auto inline-block ms-2" 
          onClick={downloadQRCode}>Download</button>
        </div>
        <div className="grid grid-cols-2 gap-4 place-items-center mt-4">
          <div className="flex flex-col items-center">
            <label className="mb-2 text-neutral-200">QR Color</label>
            <input
              type="color"
              value={qrColor}
              onChange={handleQrColorChange}
            />
          </div>
          <div className="flex flex-col items-center">
            <label className="mb-2 text-neutral-200">Background Color</label>
            <input
              type="color"
              value={bgColor}
              onChange={handleBgColorChange}
            />
          </div>
          <div>
            <label className="me-2 text-neutral-200">Include Margin:</label>
            <input
              type="checkbox"
              checked={includeMargin}
              onChange={handleIncludeMarginChange}
              id="include-margin"
            />
          </div>
          <div>
            <label className="me-2 text-neutral-200">Size:</label>
            <input
              className="bg-neutral-950 px-2 py-1 text-neutral-200 rounded-sm"
              type="number"
              value={size}
              onChange={handleSizeChange}
              id="size"
            />
          </div>
        </div>
        <QRCode
          className="m-auto my-12"
          value={text}
          fgColor={qrColor}
          bgColor={bgColor}
          includeMargin={includeMargin}
          size={size}
        />
      </div>
      <footer className="w-full">
      <a href="https://hy-tech.my.id/">
        <span className="flex justify-center text-neutral-400">Powered by FitriHY</span>
        </a>
      </footer>
    </div>
  );
}

export default App;

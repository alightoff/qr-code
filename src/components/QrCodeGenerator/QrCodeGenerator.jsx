import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { GENERATE_DATA } from "../../constants";

const QrCodeGenerator = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const onClickHandler = () => {
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    localStorage.setItem(
      GENERATE_DATA, 
      JSON.stringify([...prevData, text])
    );

    setResult(text);
    setText("");
  };

  const onChangeHandler = (e) => {
    setText(e.target.value);
    setResult("");
  };

  console.log(`result: ${result}`);

  return (
    <div className="flex items-center object-center justify-center">
      <div className="w-full max-w-xs">
        <div className="flex flex-col items-center justify-center space-y-4 w-72">
          {result !== "" ? <QRCodeSVG value={result} /> : <QRCodeSVG value={"Введите текст"} />}
          <input
            value={text}
            onChange={onChangeHandler}
            type="text"
            id="input"
            className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition duration-150 ease-in-out"
            placeholder="Введите текст"
          />
          <button
            onClick={onClickHandler}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mt-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition delay-100"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Сгенерировать QR-код
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QrCodeGenerator;

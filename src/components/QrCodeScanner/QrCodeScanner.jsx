import React, { useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import { SCAN_DATA } from "../../constants";

const QrCodeScanner = () => {
  const [info, setInfo] = useState(null);

  const scanHandler = (result) => {
    const scannedData = result[0].rawValue;
    setInfo(scannedData);

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
    localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, scannedData]));
  };

  const isUrl = (str) => {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 flex-col">
      <Scanner
        onScan={scanHandler}
        components={{
          audio: false,
          // finder: false
        }}
        styles={{
          container: { width: 350 },
        }}
      />
      <div className="mt-36 md:mt-24">
        {info ? (
          isUrl(info) ? (
            <a href={info} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              {info}
            </a>
          ) : (
            info
          )
        ) : (
          "Тут будет информация с QR-кода..."
        )}
      </div>
    </div>
  );
};

export default QrCodeScanner;

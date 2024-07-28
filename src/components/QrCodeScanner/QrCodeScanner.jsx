import React, { useState } from "react";

import { Scanner } from "@yudiel/react-qr-scanner";
import { SCAN_DATA } from "../../constants";

const QrCodeScanner = () => {
  const [info, setInfo] = useState(null);

  const scanHandler = (result) => {
    setInfo(result[0].rawValue);

    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    localStorage.setItem(
      SCAN_DATA, 
      JSON.stringify([...prevData, result[0].rawValue])
    );
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
      <div className="mt-52">{info || "Тут будет информация с QR-кода..."}</div>
    </div>
  );
};

export default QrCodeScanner;

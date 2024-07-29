// Layout.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import QrCodeGenerator from '../QrCodeGenerator/QrCodeGenerator';
import QrCodeScanner from '../QrCodeScanner/QrCodeScanner';
import Navigation from '../Navigation/Navigation';
import ScanHistory from '../ScanHistory/ScanHistory';
import GenerateHistory from '../GenerateHistory/GenerateHistory';

const Layout = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navigation />
      
      <div className="flex items-center justify-center min-h-screen bg-gray-100 flex-col">
        <Routes>
          <Route path="/generate" element={<QrCodeGenerator />} />
          <Route path="/scan" element={<QrCodeScanner />} />
          <Route path="/scanHistory" element={<ScanHistory />} />
          <Route path="/generateHistory" element={<GenerateHistory />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;

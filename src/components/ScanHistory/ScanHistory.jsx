import React from 'react';
import { SCAN_DATA } from '../../constants';
import ScanHistoryItem from './ScanHistoryItem';

const ScanHistory = () => {
  const data = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

  return (
    <div>
      {
        data.map((text, i) => <ScanHistoryItem text={text} i={i} />)
      }
    </div>
  );
}

export default ScanHistory;

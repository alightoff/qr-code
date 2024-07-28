import React from 'react';
import { GENERATE_DATA } from '../../constants';
import GenerateHistoryItem from './GenerateHistoryItem';

const GenerateHistory = () => {
  const data = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

  return (
    <div>
      {
        data.map((text, i) => <GenerateHistoryItem text={text} i={i} />)
      }
    </div>
  );
}

export default GenerateHistory;

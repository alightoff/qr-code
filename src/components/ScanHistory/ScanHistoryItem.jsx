import React from 'react';

const ScanHistoryItem = ({ text, i }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Текст скопирован в буфер обмена');
    }).catch(err => {
      alert('Ошибка при копировании текста');
    });
  };

  return (
    <div className="w-96 mb-3 p-4 border rounded-lg shadow-lg bg-white dark:bg-gray-800">
      <div className="relative">
        <label htmlFor={`text-${i}`} className="sr-only">Label</label>
        <input
          id={`text-${i}`}
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={text}
          disabled
          readOnly
        />
        <button
          className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg py-1 px-2 bg-white border-gray-200 border text-xs"
          onClick={copyToClipboard}
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default ScanHistoryItem;

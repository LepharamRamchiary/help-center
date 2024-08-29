import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="border border-gray-300 rounded shadow bg-slate-200 divide-y divide-gray-300">
      <h2 className="text-xl font-bold mb-2 px-2">{title}</h2>
      <p className='px-2 py-1'>{description}</p>
    </div>
  );
};

export default Card;

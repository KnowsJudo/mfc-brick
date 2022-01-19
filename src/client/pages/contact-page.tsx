import React from 'react';
import { BBHeader } from '../components/header/header';

export const Contact: React.FC = () => {
  const pageID = 4;
  return (
    <div>
      <BBHeader pageNo={pageID} />
    </div>
  );
};

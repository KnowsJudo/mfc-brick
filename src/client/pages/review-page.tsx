import React from 'react';
import { BBHeader } from '../components/header/header';

export const Reviews: React.FC = () => {
  const pageID = 3;
  return (
    <div>
      <BBHeader pageNo={pageID} />
    </div>
  );
};

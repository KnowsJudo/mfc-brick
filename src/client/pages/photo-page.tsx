import React from 'react';
import { BBHeader } from '../components/header/header';

export const Photos: React.FC = () => {
  const pageID = 1;
  return (
    <div>
      <BBHeader pageNo={pageID} />
    </div>
  );
};

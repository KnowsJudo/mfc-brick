import React from 'react';
import { BBHeader } from '../components/header/header';

export const Faq: React.FC = () => {
  const pageID = 2;

  return (
    <div>
      <BBHeader pageNo={pageID} />
    </div>
  );
};

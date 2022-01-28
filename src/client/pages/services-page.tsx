import React from 'react';
import { BBHeader } from '../components/header/header';

const Services: React.FC = () => {
  const pageID = 0;
  return (
    <div>
      <BBHeader pageNo={pageID} />
      <div style={{ display: 'flex', flexDirection: 'column' }}></div>
    </div>
  );
};

export default Services;

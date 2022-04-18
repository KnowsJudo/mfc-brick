import React from 'react';
import { BBHeader } from '../components/header/header';

const Services: React.FC = () => {
  const pageID = 0;
  return (
    <div>
      <BBHeader pageNo={pageID} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            margin: 'auto',
            padding: '10px',
          }}
        >
          <h2> The different services which we provide:</h2>
          <ul style={{ listStyleType: 'none', padding: '10px', fontSize: 22 }}>
            <li>- Insurance work</li>
            <li>- Repair work</li> <li>- New Houses</li>{' '}
            <li>- Extensions & Renovations</li>
            <li>- Boundary walls</li>
            <li>- Fences</li>
            <li>- Retaining walls</li>
            <li>- Piers</li>
            <li>- Garages</li>
            <li>- Steps</li>
            <li>- Sills</li>
            <li>- Letterboxes and almost anything else!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Services;

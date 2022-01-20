import React from 'react';
import { Grid } from '@material-ui/core';

const imagePath = process.env.PUBLIC_URL + '/image/';

export const HomePage: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h1 style={{ margin: 'auto', padding: '30px' }}>BRILLIANT BRICKWORK</h1>
      <Grid container style={{ marginTop: '4rem' }}>
        <div
          style={{
            margin: 'auto',
            padding: '10px',
          }}
        >
          <h3> Brilliant Brickwork caters to the needs of:</h3>
          <ul style={{ listStyleType: 'none', padding: '10px' }}>
            <li>- The individual home owner</li>
            <li>- Builders seeking Subcontractors</li>{' '}
            <li>- Real estate agents/owners corporations</li>{' '}
            <li>- Maintenance companies</li>
            <li>- and more!</li>
          </ul>
        </div>
        <img
          src={`${imagePath}DSC_0793.jpg`}
          alt="DSC_0793.jpg"
          height="300"
          width="500"
          style={{ margin: 'auto', padding: '10px' }}
        />
      </Grid>
      <Grid container style={{ marginTop: '4rem' }}>
        <img
          src={`${imagePath}filename_22.jpg`}
          alt="filename_22.jpg"
          height="300"
          width="500"
          style={{ margin: 'auto', padding: '10px' }}
        />
        <div
          style={{
            margin: 'auto',

            padding: '10px',
          }}
        >
          <ul style={{ listStyleType: 'none', padding: '10px' }}>
            <li>
              <h3>- Experienced and reliable</h3>
            </li>
            <li>
              <h3>- All jobs big and small</h3>
            </li>
            <li>
              <h3>- Specializing in all types of brick and block work</h3>
            </li>
          </ul>
        </div>
      </Grid>
      <Grid container style={{ marginTop: '4rem' }}>
        <div
          style={{
            margin: 'auto',

            padding: '10px',
          }}
        >
          <h3>Always professional, on-time & friendly!</h3>
        </div>
        <img
          src={`${imagePath}DSC_0778.jpg`}
          alt="DSC_0778.jpg"
          height="300"
          width="500"
          style={{ margin: 'auto', padding: '10px' }}
        />
      </Grid>
      <Grid container style={{ marginTop: '4rem' }}>
        <div
          style={{
            margin: 'auto',

            padding: '10px',
          }}
        >
          <ul style={{ listStyleType: 'none', padding: '10px' }}>
            <li>
              <h1>For a free quote call Micah</h1>
            </li>
            <li>
              <h1>0423 458 631</h1>
            </li>
          </ul>
        </div>
      </Grid>
    </div>
  );
};

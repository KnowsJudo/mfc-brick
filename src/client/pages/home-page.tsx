import React from 'react';
import { Grid } from '@material-ui/core';
import { Banner } from '../components/banner/banner';
import { imagePath } from '../utils/imagepath';

export const HomePage: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Banner imagePath="DSC_0793.jpg" />
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
          src={`${imagePath}filename_22.jpg`}
          alt="filename_22.jpg"
          height="300"
          width="500"
          style={{ margin: 'auto', padding: '10px' }}
        />
      </Grid>
      <Grid container style={{ marginTop: '4rem' }}>
        <img
          src={`${imagePath}48.jpg`}
          alt="48.jpg"
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
        <Banner imagePath="filename_01.jpg" />
        <div
          style={{
            margin: 'auto',
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Encode Sans SC, sans-serif',
          }}
        >
          <h1>For a free quote call Micah</h1>

          <h1 style={{ margin: 'auto', justifyContent: 'center' }}>
            0423 458 631
          </h1>
        </div>
      </Grid>
    </div>
  );
};

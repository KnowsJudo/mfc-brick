import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  header: {
    backgroundColor: '#070202',
    color: 'white',
    opacity: '0.9',
    height: '25rem',
  },
});

export const MFCHeader: React.FC = () => {
  const classes = useStyles();

  return (
    <Box>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Typography
            component="div"
            style={{
              padding: 10,
              margin: 'auto',
              justifyContent: 'centre',
            }}
          >
            <header>
              <h1>Brilliant Brickwork</h1>
              <h1>0423 458 631 </h1>
              <div>
                <img
                  src="/image/logo.png"
                  alt="Brilliant Logo"
                  style={{ height: '12rem' }}
                />
              </div>
            </header>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

import React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles({
  header: { backgroundColor: 'white', color: 'black' },
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
            <header>MFC Brick</header>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

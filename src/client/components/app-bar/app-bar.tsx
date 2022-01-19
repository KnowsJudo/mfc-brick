import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  makeStyles,
  Typography,
  Button,
} from '@material-ui/core';
import { pageList } from '../../utils/page-list';

const useStyles = makeStyles({
  header: {
    backgroundColor: '#070202',
    color: 'white',
    opacity: '0.9',
    height: '13rem',
  },
});

export const TopNav: React.FC = () => {
  const classes = useStyles();
  const navigate = useNavigate();

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
            <header
              style={{
                display: 'flex',
                margin: 'auto',
                alignItems: 'center',
              }}
            >
              <img
                src="/image/logo.png"
                alt="Brilliant Logo"
                onClick={() => navigate(`/`)}
                style={{
                  height: '10rem',
                  padding: '10px',
                  justifyContent: 'flex-start',
                  cursor: 'pointer',
                }}
              />
              <h1 style={{ padding: '10px' }}>Brilliant Brickwork</h1>
              <div className="navLinks">
                {pageList.map((next) => {
                  return (
                    <Button
                      key={next.id}
                      style={{ color: 'white' }}
                      onClick={() => navigate(`/${next.name}`)}
                    >
                      {next.name}
                    </Button>
                  );
                })}
              </div>
              <h1 style={{ padding: '10px' }}>0423 458 631 </h1>
            </header>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

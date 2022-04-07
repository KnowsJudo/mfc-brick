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
import { Logo } from '../logo/logo';

const useStyles = makeStyles({
  header: {
    backgroundColor: '#070202',
    color: 'white',
    opacity: '0.9',
    height: '13rem',
    width: '100vw',
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
              fontFamily: 'Encode Sans SC, sans-serif',
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
              <Logo height="10rem" />
              <h1 style={{ padding: '30px' }}>Brilliant Brickwork</h1>
              <div className="navLinks">
                {pageList.map((next) => {
                  return (
                    <Button
                      key={next.id}
                      style={{
                        color: 'white',
                        fontFamily: 'Encode Sans SC, sans-serif',
                        marginTop: '7px',
                      }}
                      onClick={() => navigate(`/${next.name}`)}
                    >
                      {next.name}
                    </Button>
                  );
                })}
              </div>
              <h1 style={{ paddingLeft: '30px' }}>0423 458 631 </h1>
            </header>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ILogo } from '../../types/logo';

export const Logo: React.FC<ILogo> = (props) => {
  const navigate = useNavigate();
  return (
    <img
      src="/image/logo.png"
      alt="Brilliant Logo"
      onClick={() => navigate(`/`)}
      style={{
        margin: 'auto',
        height: props.height,
        padding: '10px',
        justifyContent: 'flex-start',
        cursor: 'pointer',
      }}
    />
  );
};

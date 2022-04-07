import React from 'react';
import { Logo } from '../logo/logo';

export const BBFooter: React.FC = () => {
  return (
    <footer
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        backgroundColor: 'white',
        color: 'black',
        opacity: '0.9',
        height: '13rem',
        alignContent: 'center',
      }}
    >
      <Logo height="5rem" />
      <section style={{ margin: 'auto', padding: '4rem' }}> FACEBOOK</section>
      <section style={{ margin: 'auto' }}>LINKS</section>
    </footer>
  );
};

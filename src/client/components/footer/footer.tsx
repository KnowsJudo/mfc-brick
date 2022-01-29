import React from 'react';

export const BBFooter: React.FC = () => {
  return (
    <footer
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        backgroundColor: '#070202',
        color: 'white',
        opacity: '0.9',
        height: '13rem',
        alignContent: 'center',
      }}
    >
      <section style={{ margin: 'auto', padding: '4rem' }}>FACEBOOK</section>
      <section style={{ margin: 'auto' }}>LINKS</section>
    </footer>
  );
};

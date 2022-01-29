import React from 'react';
import { MFCRoutes } from '../../pages/routes';
import GlobalStyles from '../../styles/global-styles';
import { TopNav } from '../app-bar/app-bar';
import { BBFooter } from '../footer/footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <TopNav />
      <MFCRoutes />
      <BBFooter />
    </div>
  );
};

export default App;

import React from 'react';
import { MFCRoutes } from '../../pages/routes';
import GlobalStyles from '../../styles/global-styles';
import { TopNav } from '../app-bar/app-bar';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <TopNav />
      <MFCRoutes />
    </div>
  );
};

export default App;

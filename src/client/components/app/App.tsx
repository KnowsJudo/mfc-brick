import React from 'react';
import { MFCRoutes } from '../../pages/routes';
import GlobalStyles from '../../styles/global-styles';
import { MFCHeader } from '../header/header';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <MFCHeader />
      <MFCRoutes />
    </div>
  );
};

export default App;

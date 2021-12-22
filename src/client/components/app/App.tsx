import React from 'react';
import GlobalStyles from '../../styles/global-styles';
import { MFCHeader } from '../header/header';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <MFCHeader />
    </div>
  );
};

export default App;

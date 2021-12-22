import React from 'react';
import { Route, HashRouter } from 'react-router-dom';

export const Routes: React.FC = () => (
  <HashRouter>
    <Route element={null} path="/" />
    <Route element={null} path="/services" />
    <Route element={null} path="/photos" />
    <Route element={null} path="/faq" />
    <Route element={null} path="/contact" />
  </HashRouter>
);

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Contact } from './contact-page';
import { Faq } from './faq-page';
import { HomePage } from './home-page';
import { Photos } from './photo-page';
import { Reviews } from './review-page';
import Services from './services-page';

export const MFCRoutes: React.FC = () => (
  <Routes>
    <Route element={<HomePage />} path="/" />
    <Route element={<Services />} path="/services" />
    <Route element={<Photos />} path="/photos" />
    <Route element={<Faq />} path="/faq" />
    <Route element={<Reviews />} path="/reviews" />
    <Route element={<Contact />} path="/contact" />
  </Routes>
);

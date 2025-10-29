import React, { useEffect } from 'react';
import CyberHero from './CyberHero/CyberHero';
import CyberFeatures from './CyberFeatures/CyberFeatures';
import CyberCTA from './CyberCTA/CyberCTA';

const CyberSecurity = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CyberHero />
      <CyberFeatures />
      <CyberCTA />
    </>
  );
};

export default CyberSecurity;
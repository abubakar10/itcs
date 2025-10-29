import React, { useEffect } from 'react';
import CloudHero from './CloudHero/CloudHero';
import CloudFeatures from './CloudFeatures/CloudFeatures';
import CloudCTA from './CloudCTA/CloudCTA';

const Cloud = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CloudHero />
      <CloudFeatures />
      <CloudCTA />
    </>
  );
};

export default Cloud;

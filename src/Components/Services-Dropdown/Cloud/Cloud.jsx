import React, { useEffect } from 'react';
import CloudSection1 from './CloudSection1/CloudSection1';
import CloudSection2 from './CloudSection2/CloudSection2';
import CloudSection3 from './CloudSection3/CloudSection3';
import CloudSection4 from './CloudSection4/CloudSection4';

const Cloud = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CloudSection1 />
      <CloudSection2 />
      <CloudSection3 />
      {/* <CloudSection4 /> */}
    </>
  );
};

export default Cloud;

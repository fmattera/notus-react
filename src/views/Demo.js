import React, { useState, useRef, useEffect } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import IndexNavbar from 'components/Navbars/IndexNavbar.js';
import DemoFunctionality from 'components/DemoComponents/DemoFunctionality';
import DemoHero from 'components/DemoComponents/DemoHero';
import Footer from 'components/Footers/Footer.js';

const Demo = () => {
  return (  
    <>
    
      <DemoHero/>
      <DemoFunctionality/>
      <Footer/>
    
    
    
    </>
  );
};
export default Demo;
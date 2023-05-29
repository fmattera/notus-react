import React, { useState, useRef, useEffect } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import IndexNavbar from 'components/Navbars/IndexNavbar.js';
import DemoFunctionality from 'components/DemoComponents/DemoFunctionality';
import DemoHero from 'components/DemoComponents/DemoHero';


const Landing = () => {
  return (  
    <>
    <div>
      <DemoHero/>
      <DemoFunctionality/>
    </div>
    
    
    </>
  );
};
export default Landing;
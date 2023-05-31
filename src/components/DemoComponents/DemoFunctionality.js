import React, { useState, useRef, useEffect } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

import { FaQuestionCircle } from 'react-icons/fa';
import ekenasetGreen from 'assets/img/item_pictures/ekenaset-green.png';
import essebodaBlue from 'assets/img/item_pictures/esseboda-blue.png';
import fammarpBeige from 'assets/img/item_pictures/fammarp-beige.png';
import glostad2SeatSofa from 'assets/img/item_pictures/glostad-2-seat-sofa-knisa-dark-grey__0950864_pe800736_s5 Background Removed.png';
import kivik3SeatSofaTallmyraWhiteBlack from 'assets/img/item_pictures/kivik-3-seat-sofa-tallmyra-white-black__0781544_pe760855_s5 Background Removed.png';
import landskronaThreeSeatSofaGrannBomstadBlackMetal from 'assets/img/item_pictures/landskrona-three-seat-sofa-grann-bomstad-black-metal__0321002_pe514786_s5 Background Removed.png';
import langaryd3SeatSofaLejdeLightGreyWood from 'assets/img/item_pictures/langaryd-3-seat-sofa-lejde-light-grey-wood__0992758_pe820227_s5 Background Removed.png';
import smedstorp2SeatSofaLejdeRedBrownBlack from 'assets/img/item_pictures/smedstorp-2-seat-sofa-lejde-red-brown-black__0989821_pe818623_s5 Background Removed.png';
import vimleWhite from 'assets/img/item_pictures/GEIK0073-1 Background Removed.png';

//import image2 from './favicon.ico';


const DemoFunctionality = () => {
  const [src, setSrc] = useState(null);
  const [completedCrop, setCompletedCrop] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [outputImageSrc, setOutputImageSrc] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [loading, setLoading] = useState(false);
  const imageRef = useRef(null);
  const [boxCoordinates, setBoxCoordinates] = useState(null);
  const [error, setError] = useState(null);
  const [showPopover, setShowPopover] = useState(false);

  const items = [
    { src: ekenasetGreen, value: 'ekanaset-green-3seat-green_denoisedv2' },
    { src: essebodaBlue, value: 'esseboda-blue-2seat-blue_denoisedv2' },
    { src: fammarpBeige, value: 'fammarp-beige-2seat-grey_denoisedv2' },
    { src: glostad2SeatSofa, value: 'glostad-grey-2seat-grey_denoisedv2' },
    { src: kivik3SeatSofaTallmyraWhiteBlack, value: 'kivik-beige-3seat-beige_denoisedv2' },
    { src: landskronaThreeSeatSofaGrannBomstadBlackMetal, value: 'landskrona-dark_leather-3seat_denoisedv2' },
    { src: langaryd3SeatSofaLejdeLightGreyWood, value: 'langaryd-grey-3seat_denoisedv2' },
    { src: smedstorp2SeatSofaLejdeRedBrownBlack, value: 'smedstorp-red-3seat_denoisedv2' },
    { src: vimleWhite, value: 'vimle-white-denoisedv2' },
   ];
  


   

  const handleImageLoaded = (image) => {
    imageRef.current = image;
  };

  const handleSave = () => {
    return new Promise((resolve, reject) => {
      try {
        const image = imageRef.current;
        console.log(image)
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        const { width, height, x, y } = completedCrop;
  
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
  
        ctx.drawImage(
          image,
          x * scaleX,
          y * scaleY,
          width * scaleX,
          height * scaleY,
          0,
          0,
          width,
          height
        );
  
        const croppedImageDataUrl = canvas.toDataURL('image/jpeg');
        
        resolve(croppedImageDataUrl); // Resolve with the data URL
      } catch (error) {
        reject(error);
      }
    });
  };

  const handleReplace = async () => {

    setOutputImageSrc(null); // Set outputImageSrc to null
    if (!boxCoordinates) {
      console.log("no box")
      setCroppedImage(null); // Set croppedImage to null
      const croppedImageDataUrl = await handleSave();
      setCroppedImage(croppedImageDataUrl);
    } 
    else{
      handleSendReplace(); // Call handleSendReplace function if boxCoordinates exist
    }

  };
  

  useEffect(() => {
    if (croppedImage) {
      handleSendReplace();
    }
  }, [croppedImage]);
  

  // const reactCropKey = completedCrop
  //   ? `${completedCrop.width}-${completedCrop.height}`
  //   : '';

  // useEffect(() => {
  //   if (croppedImage) {
  //     setOutputImageSrc(null);
  //     handleSendReplace();
  //   }
  // }, [croppedImage]);

  const handleSendReplace = async () => {
    console.log(croppedImage)
    const imgStr = croppedImage.replace(/^data:image\/\w+;base64,/, '');
  
    let payload = {
      pic: imgStr,
      item: selectedItem,
    };
    console.log(boxCoordinates)
    if (boxCoordinates) {
      const [x1, y1, width, height] = boxCoordinates;
      const x2 = x1 + width;
      const y2 = y1 + height;
      setError(null);
      payload = {
        ...payload,
        box: [x1, y1, x2, y2],
      };
      setBoxCoordinates(null);
    }
    console.log(payload)
  
    try {
      
      setLoading(true);
      const response = await fetch('https://neolocus.xyz/endpoint_replace', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error(
          `Failed to send replace image: ${response.statusText}`
        );
      }
      const data = await response.json();
      console.log(data)
      if (data.Error) {
        setError(data.Error);
      } else {
        setError(null);
        setOutputImageSrc(`data:image/jpeg;base64,${data.output_image}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined);
      const reader = new FileReader();
      reader.addEventListener('load', () =>
        setSrc(reader.result?.toString() || '')
      );
      reader.readAsDataURL(e.target.files[0]);
    }
    setOutputImageSrc(null);
    setBoxCoordinates(null);
  };

  const [crop, setCrop] = useState(null)
  
  const [crop2, setCrop2] = useState(null);







  return (
 
      <>
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mb-8 shadow-lg rounded-lg">
            <div className="text-center w-full">
              <div className="flex justify-center mb-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={onSelectFile}
                  className="py-2 px-4 bg-white rounded"
                />
              </div>
            </div>
           
          </div>
        </div>
      {src && (
         
        <div className="container mx-auto my-1">
          <div className="flex justify-center">

            <div className="p-8 bg-gray-200 rounded-lg shadow-lg lg:w-5/12 border-4 border-gray-400">
              <div className="flex justify-end">
                <FaQuestionCircle
                  className="text-gray-500 cursor-pointer mb-2"
                  size={20}
                  onMouseEnter={() => setShowPopover(true)}
                  onMouseLeave={() => setShowPopover(false)}
                />
              </div>
          
            {showPopover && (
              <div className="mr-10 bg-white border border-gray-400 rounded-lg p-4">
                <p>Please crop your image to a square, in order to start the NeoLocus engine.</p>
              </div>
            )}
            <div>
              
              
                
            <ReactCrop
             
              crop={crop}
              onChange={(newCrop) => {
                setCrop(newCrop);
                handleImageLoaded(imageRef.current);
              }}
              onComplete={setCompletedCrop}
              
              aspect={1}
              width={100}
              height={100}
              x={100}
              y={100}

            >
              <img
                src={src}
                ref={imageRef}
                alt="Crop"
                className="object-contain"
                // style={{ maxHeight: '512px', maxWidth: '512px' }}
              />
            </ReactCrop>
              
            </div>
          </div>
        </div>
      </div>
      )}
        <div>



        {completedCrop && (
          <div className="container mx-auto my-1">
            <div className="mt-4">
              <div className="max-w-3xl mx-auto overflow-x-auto rounded shadow-lg bg-white px-8" style={{ maxHeight: '300px' }}>
                <div className="flex justify-start" style={{ width: 'fit-content' }}>
                    {items.map((item) => (
                        <img
                            key={item.value}
                            src={item.src}
                            alt={item.value}
                            onClick={() => setSelectedItem(item.value)}
                            className={`h-18 w-18 object-cover cursor-pointer`}
                            style={{ width: selectedItem === item.value ? '120px' : '150px', height: selectedItem === item.value ? '120px' : '150px' }}
                        />
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}


      </div>
      <div className="container mx-auto my-1">
        {!error && completedCrop && (
          <div className="mt-4">
            <button onClick={handleReplace} className="mt-4 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded block mx-auto">
              Replace
            </button>
          </div>
        )}
      </div>
      <div className="flex justify-center">
       
      {!!outputImageSrc && (
        <div style={{ display: 'inline-block' }} className="p-8 bg-gray-200 rounded-lg shadow-lg border-4 border-gray-400 mt-4">
          <img src={outputImageSrc} alt="Output" style={{ width: 'auto', height: 'auto' }} />
        </div>
      )}
      {!!error && (
        <div>
          <div className="p-8 bg-gray-200 rounded-lg shadow-lg border-4 border-gray-400 mt-4" style={{ width: '512px', maxWidth: '512px' }}>
            <p className="text-sm" style={{ wordWrap: 'break-word' }}>
              We did not find any couch in your picture. 
            </p>
            <p className="text-sm" style={{ wordWrap: 'break-word' }}>
            Crop it again, locating where you'd like to see the couch. 
            </p>
            <p className="text-sm" style={{ wordWrap: 'break-word' }}>
            Then, click on 'Add a couch'.
            </p>
            <ReactCrop
              crop={crop2}
              onChange={(cropCrop) => {
                console.log(cropCrop)
                setCrop2(cropCrop);
                if (cropCrop && !isNaN(cropCrop.x) && !isNaN(cropCrop.y) && !isNaN(cropCrop.width) && !isNaN(cropCrop.height)) {
                  setBoxCoordinates([cropCrop.x, cropCrop.y, cropCrop.width, cropCrop.height]);
                }
                console.log(boxCoordinates)
              }}
            >
              <img
                src={croppedImage}
                alt='Draw the space where the couch should be'
                style={{ width: '512px', height: '512px', objectFit: 'contain' }}
              />
            </ReactCrop>
          </div>
          <div className="mt-4">
            <button onClick={handleReplace} className="mt-4 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded block mx-auto">
              Add a couch
            </button>
          </div>
        </div>
      )}




          {!!loading && (
            <img src="load.gif" alt="Loading" className="object-contain h-64 w-full mt-4" />
          )}
        </div>
      
  
    </> );
};  
export default DemoFunctionality;

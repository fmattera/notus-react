import React, { useState, useRef, useEffect } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import IndexNavbar from 'components/Navbars/IndexNavbar.js';

import image1 from 'assets/img/landskrona-dark_leather-3seat_denoisedv2.jpg';
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

  const items = [
    { src: image1, value: 'smedstorp-red-3seat_denoisedv2' },
    { src: image1, value: 'buy' },
    { src: image1, value: 'tu'  },
    { src: image1, value: 'tu2' },
    { src: image1, value: 'tu3' },
    { src: image1, value: 'tu4' },
    { src: image1, value: 'tu5' },
    // Add more items here...
  ];


  const handleSave = () => {
    const image = imageRef.current;

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
    setCroppedImage(croppedImageDataUrl);
  };

  const handleSelectedItemChange = (event) => {
    setSelectedItem(event.target.value);
  };

  const handleImageLoaded = (image) => {
    imageRef.current = image;
  };

  const handleReplace = () => {
    if (!boxCoordinates) {
      handleSave();
    }
  };

  const reactCropKey = completedCrop
    ? `${completedCrop.width}-${completedCrop.height}`
    : '';

  useEffect(() => {
    if (croppedImage) {
      setOutputImageSrc(null);
      handleSendReplace();
    }
  }, [croppedImage]);

  const handleSendReplace = async () => {
    const imgStr = croppedImage.replace(/^data:image\/\w+;base64,/, '');

    let payload = {
      pic: imgStr,
      item: selectedItem,
    };

    if (boxCoordinates) {
      const x1 = boxCoordinates.x;
      const y1 = boxCoordinates.y;
      const x2 = x1 + boxCoordinates.width;
      const y2 = y1 + boxCoordinates.height;
      setError(null);
      payload = {
        ...payload,
        box: [x1, y1, x2, y2],
      };
    }

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
  };

  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1 });
  const [crop2, setCrop2] = useState(null);





  return (
    <>
      <IndexNavbar fixed />
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center w-full">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            See your products in any environment
          </h1>
          <p className="text-2xl mb-8">
            Upload your own picture, pick a replacement and we'll do the rest!
          </p>
          <div className="flex justify-center mb-4">
            <input
              type="file"
              accept="image/*"
              onChange={onSelectFile}
              className="py-2 px-4 bg-white rounded"
            />
          </div>
          <div className="flex justify-center mx-auto space-x-8 mt-10">
            <button className="hover:underline bg-transparent hover:bg-black text-white hover:text-black font-semibold py-2 px-4 border border-black hover:border-transparent rounded-full">
              View Gallery
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-1">
        <div className="flex justify-center">
          <div className="p-8 bg-gray-200 rounded-lg shadow-lg lg:w-5/12 border-4 border-gray-400">
            <div>
              {src && (
                <ReactCrop
                  key={reactCropKey}
                  onImageLoaded={setImage}
                  crop={crop}
                  onChange={(newCrop) => {
                    setCrop(newCrop);
                    handleImageLoaded(imageRef.current);
                  }}
                  aspect={1 / 1}
                  onComplete={(c) => setCompletedCrop(c)}
                >
                  <img
                    src={src}
                    ref={imageRef}
                    className="object-contain"
                    style={{ maxHeight: '512px', maxWidth: '512px' }}
                  />
                </ReactCrop>
              ): ( <ReactCrop
                key={reactCropKey}
                onImageLoaded={setImage}
                crop={crop}
                onChange={(newCrop) => {
                  setCrop(newCrop);
                  handleImageLoaded(imageRef.current);
                }}
                aspect={1 / 1}
                onComplete={(c) => setCompletedCrop(c)}
              >
                <img
                  src={src}
                  ref={imageRef}
                  className="object-contain"
                  style={{ maxHeight: '512px', maxWidth: '512px' }}
                />
              </ReactCrop>)}
            </div>
          </div>
        </div>
        <div>
          {completedCrop && (
            <div className="flex justify-center ">
              <div className="flex  overflow-x-auto rounded shadow-lg bg-white" style={{ width: 'fit-content' }}>
                {items.map((item) => (
                  <img
                    key={item.value}
                    src={item.src}
                    alt={item.value}
                    onClick={() => setSelectedItem(item.value)}
                    className={`h-18 w-18 object-cover cursor-pointer `}
                    style={{ width: selectedItem === item.value ? '70%' : '250px', height: selectedItem === item.value ? '70%' : '250px' }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="container mx-auto my-1">
        {completedCrop && (
          <div className="mt-4">
            <button onClick={handleReplace} className="mt-4 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded block w-full">
              Replace
            </button>
          </div>
        )}
      </div>
      <div className="container mx-auto my-1">
        {!!error && (
          <div>
            <h1 className="text-red-500">{error}</h1>
            <ReactCrop
              key={reactCropKey}
              onImageLoaded={setImage}
              crop={crop2}
              onChange={(newCrop) => {
                setCrop2(newCrop);
                setBoxCoordinates(
                  newCrop.x +
                  ',' +
                  newCrop.y +
                  ',' +
                  newCrop.width +
                  ',' +
                  newCrop.height
                );
              }}
              maxWidth={512}
              maxHeight={512}
            >
              <img src={croppedImage} className="object-contain" style={{ maxHeight: '512px', maxWidth: '512px' }} />
            </ReactCrop>
          </div>
        )}
      </div>
      <div className="flex justify-center">
        <div className="p-8 bg-gray-200 rounded-lg shadow-lg lg:w-5/12 border-4 border-gray-400">
          {!!outputImageSrc && (
            <img src={outputImageSrc} alt="Output" className="object-contain h-64 w-full mt-4" />
          )}
          {!!loading && (
            <img src="load.gif" alt="Loading" className="object-contain h-64 w-full mt-4" />
          )}
        </div>
      </div>
    </>
  );
          }

  export default DemoFunctionality;
  
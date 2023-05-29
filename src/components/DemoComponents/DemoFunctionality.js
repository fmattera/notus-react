import React, { useState, useRef, useEffect } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';
import IndexNavbar from 'components/Navbars/IndexNavbar.js';
import { FileUploader } from "baseui/file-uploader";
import { FaQuestionCircle } from 'react-icons/fa';
import asarum from 'assets/img/item_pictures/asarum.png';
import ekanasetBeige from 'assets/img/item_pictures/ekanaset-beige.png';
import ekenasetGreen from 'assets/img/item_pictures/ekenaset-green.png';
import essebodaBlue from 'assets/img/item_pictures/esseboda-blue.png';
import fammarpBeige from 'assets/img/item_pictures/fammarp-beige.png';
import glostad2SeatSofa from 'assets/img/item_pictures/glostad-2-seat-sofa-knisa-dark-grey__0950864_pe800736_s5 Background Removed.png';
import kivik3SeatSofaKelingeGreyTurquoise from 'assets/img/item_pictures/kivik-3-seat-sofa-kelinge-grey-turquoise__1055806_pe848110_s5 Background Removed.png';
import kivik3SeatSofaTallmyraWhiteBlack from 'assets/img/item_pictures/kivik-3-seat-sofa-tallmyra-white-black__0781544_pe760855_s5 Background Removed.png';
import kivik3SeatSofaWithChaiseLongueKelingeGreyTurquoise from 'assets/img/item_pictures/kivik-3-seat-sofa-with-chaise-longue-kelinge-grey-turquoise__1055847_pe848125_s5 Background Removed.png';
import klippan2SeatSofaVissleGrey from 'assets/img/item_pictures/klippan-2-seat-sofa-vissle-grey__0239990_pe379591_s5 Background Removed.png';
import landskrona3SeatSofaGunnaredDarkGreyMetal from 'assets/img/item_pictures/landskrona-3-seat-sofa-gunnared-dark-grey-metal__0602115_pe680184_s5 Background Removed.png';
import landskronaThreeSeatSofaGrannBomstadBlackMetal from 'assets/img/item_pictures/landskrona-three-seat-sofa-grann-bomstad-black-metal__0321002_pe514786_s5 Background Removed.png';
import langaryd3SeatSofaLejdeLightGreyWood from 'assets/img/item_pictures/langaryd-3-seat-sofa-lejde-light-grey-wood__0992758_pe820227_s5 Background Removed.png';
import linanas2SeatSofaVissleDarkGrey from 'assets/img/item_pictures/linanas-2-seat-sofa-vissle-dark-grey__0962404_pe808061_s5 Background Removed.png';
import lyckseleHavet2SeatSofaBedVansbroDarkGrey from 'assets/img/item_pictures/lycksele-havet-2-seat-sofa-bed-vansbro-dark-grey__0949727_pe799964_s5 Background Removed.png';
import napper from 'assets/img/item_pictures/napper.jpg';
import parup3SeatSofaVissleDarkGreen from 'assets/img/item_pictures/parup-3-seat-sofa-vissle-dark-green__1041906_pe841186_s5 Background Removed.png';
import smedstorp2SeatSofaLejdeRedBrownBlack from 'assets/img/item_pictures/smedstorp-2-seat-sofa-lejde-red-brown-black__0989821_pe818623_s5 Background Removed.png';
import soderhamn4SeatSofaWithChaiseLongueGunnaredBeige from 'assets/img/item_pictures/soderhamn-4-seat-sofa-with-chaise-longue-gunnared-beige__0766708_pe753869_s5 Background Removed.png';
import vimle2SeatSofaGrannBomstadBlack from 'assets/img/item_pictures/vimle-2-seat-sofa-grann-bomstad-black__0817321_pe773961_s5 Background Removed.png';
import vimle2SeatSofaHallarpGrey from 'assets/img/item_pictures/vimle-2-seat-sofa-hallarp-grey__0949417_pe799719_s5 Background Removed.png';
import viskafors3SeatSofaHogalidBrownBirch from 'assets/img/item_pictures/viskafors-3-seat-sofa-hogalid-brown-birch__1088056_pe861031_s5 Background Removed.png';

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
    { src: vimle2SeatSofaGrannBomstadBlack, value: 'smedstorp-red-3seat_denoisedv2' },
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
        setSrc(null);
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
                <p>Please make the image square.</p>
              </div>
            )}
            <div>
              
              
                
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
              
            </div>
          </div>
        </div>
      </div>
      )}
        <div>



        {completedCrop && (
          <div className="container mx-auto my-1">
            <div className="mt-4">
              <div className="max-w-3xl mx-auto overflow-y-auto rounded shadow-lg bg-white" style={{ maxHeight: '300px' }}>
                <div className="flex justify-center" style={{ width: 'fit-content' }}>
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
        {completedCrop && (
          <div className="mt-4">
            <button onClick={handleReplace} className="mt-4 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded block w-full">
              Replace
            </button>
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
  
    </> );
};  
export default DemoFunctionality;

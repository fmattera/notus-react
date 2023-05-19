// Date: 09/04/21
import React, { useState, useRef, useEffect } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';


const Landing = ()=>{
  const [src, setSrc] = useState(null)
  const [completedCrop, setCompletedCrop] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [outputImageSrc, setOutputImageSrc] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [loading, setLoading] = useState(false);
  const imageRef = useRef(null);

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
    } ;
  
  

  const handleImageLoaded = (image) => {
    imageRef.current = image;
    console.log(imageRef.current);
  };

  const handleReplace = () => { 
    setOutputImageSrc(null)
    handleSave();
};

// Add a key prop to the ReactCrop component
const reactCropKey = completedCrop ? completedCrop.width + '-' + completedCrop.height : '';

  useEffect(() => {
      if (croppedImage) {
          console.log(croppedImage);
          handleSendReplace();
      }
  }, [croppedImage]);

const handleSendReplace = async () => {

    const imgStr = croppedImage.replace(/^data:image\/\w+;base64,/, ''); // Strip data URL prefix
  
    const payload = { pic: imgStr, item:selectedItem };
  
    try {
      setLoading(true);     
      const response = await fetch('https://neolocus.xyz/endpoint_replace', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      console.log(response);
      if (!response.ok) {
        throw new Error(`Failed to send replace image: ${response.statusText}`);
      }
      const data = await response.json();
      setOutputImageSrc(`data:image/jpeg;base64,${data.output_image}`);
  
      // Handle success
    } catch (error) {
      // Handle error
    } finally {
      setLoading(false);
    }
};


  const onSelectFile = e=> {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined) // Makes crop preview update between images.
      const reader = new FileReader()
      reader.addEventListener('load', () =>
        setSrc(reader.result?.toString() || ''),
      )
      reader.readAsDataURL(e.target.files[0])
    }
    setOutputImageSrc(null)
    
  }

  const [image, setImage] = useState(null)
  const[crop, setCrop] = useState({aspect : 1})
 


return (
  <div className='container'>
    <div className='row'>
      <div >
        <input type='file' accept='image/*' onChange={onSelectFile} />

      </div>
      <div >
        <div>
        {!!src && (
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
            <img src={src} ref={imageRef} />
          </ReactCrop>
      
        )}
        {!!completedCrop && (<div>
          <select 
            value={selectedItem} onChange={handleSelectedItemChange} style={{color:'black', backgroundColor:'lightgray'}}>
           <option value="">Select an item</option>
           <option value="smedstorp-red-3seat_denoisedv2">Smedstorp red</option>
           <option value="ekanaset-green-3seat-green_denoisedv2">Ekanaset green</option>
           <option value="vimle-black_leather-2seat_denoisedv2">Vimle black leather</option>
           <option value="kivik-beige-3seat-beige_denoisedv2">Kivik beige</option>
           <option value="landskrona-green-3seat_denoisedv2">Landskrona green</option>
           <option value="vimle-grey-2seat_denoisedv2">Vimle grey</option>
           <option value="esseboda-blue-2seat-blue_denoisedv2">Esseboda blue</option>
           <option value="vimle-white-denoisedv2">Vimle white</option>
           <option value="langaryd-grey-3seat_denoisedv2">Langaryd grey</option>
           <option value="glostad-grey-2seat-grey_denoisedv2">Glostad grey</option>
           <option value="fammarp-beige-2seat-grey_denoisedv2">Fammarp beige</option>
           <option value="landskrona-dark_leather-3seat_denoisedv2">Landskrona dark leather</option>
           
           
          </select>
          
            <button onClick={handleReplace}>Replace</button>
          </div>
        )}
        
        
        <div>
          {!!outputImageSrc &&(
            <img src={outputImageSrc} alt="Output" />

          )}
          {!!loading && <img src="load.gif" alt="Loading" />} 
        </div>
                
      </div>
    </div>
  </div>

</div>
)
}
export default Landing;

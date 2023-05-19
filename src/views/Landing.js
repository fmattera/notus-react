import React, { useState, useRef } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

const Landing = ()=>{
  const [src, setSrc] = useState(null)
  const [completedCrop, setCompletedCrop] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
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
  
  
  
  

  const handleImageLoaded = (image) => {
    imageRef.current = image;
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
        {!!src && (
        <ReactCrop
        onImageLoaded={setImage}
        crop={crop}
        onChange={(newCrop) => {
          setCrop(newCrop);
          handleImageLoaded(imageRef.current);
        }}
        aspect={1/1}
        onComplete={(c) => setCompletedCrop(c)}
      >
        <img src={src} ref={imageRef} />
      </ReactCrop>
      
        )}
        {!!completedCrop && (
          <div>
            <button onClick={handleSave}>Save Image</button>
          </div>
        )}
        {!!croppedImage && (
          <div>
            <h2>Saved Image</h2>
            <img src={croppedImage} alt="Saved" />
          </div>
        )}

                
      </div>
    </div>
  </div>
)
}
export default Landing;
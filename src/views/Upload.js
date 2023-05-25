import AWS from 'aws-sdk';
import React, { useState } from 'react';
import IndexNavbar from 'components/Navbars/IndexNavbar.js';

const s3 = new AWS.S3({
  region: 'us-east-1',
  accessKeyId: process.env.NEXT_PUBLIC_REACT_APP_AWS_ACCESS_KEY_ID, 
  secretAccessKey: process.env.NEXT_PUBLIC_REACT_APP_AWS_SECRET_ACCESS_KEY,
});

function UploadForm() {
  const [loading, setLoading] = useState(false);
  const [productName, setProductName] = useState("");
  const [productLink, setProductLink] = useState("");
  const [description, setDescription] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const folderName = userEmail.replace('@', '_at_');
    const csvData = `Product Name,Product Link,Description\n${productName},${productLink},${description}`;

    const uploadPromises = images.map((image, index) => {
      const uploadParams = {
        Bucket: 'demo-client-uploads',
        Key: `${folderName}/${image.name}`,
        Body: image,
      };
      return s3.upload(uploadParams).promise();
    });

    const csvUploadParams = {
      Bucket: 'demo-client-uploads',
      Key: `${folderName}/data.csv`,
      Body: csvData,
      ContentType: 'text/csv',
    };
    uploadPromises.push(s3.upload(csvUploadParams).promise());

    try {
      await Promise.all(uploadPromises);
      setLoading(false);
      alert('Upload Success');
    } catch (error) {
      setLoading(false);
      console.error('Error', error);
    }
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  return (
    <>
    <IndexNavbar fixed />
    <section className="header relative pt-16 items-center flex h-screen max-h-860-px" >
        <div class="form-style-10">
        <form className="ml-20" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
        <div>
            <label htmlFor="productName" className="text-blueGray-300">Product Name *</label>
            <input type="text" id="productName" value={productName} onChange={(e) => setProductName(e.target.value)} required />
        </div>
        <div>
            <label htmlFor="productLink" className="text-blueGray-300">Product Link</label>
            <input type="text" id="productLink" value={productLink} onChange={(e) => setProductLink(e.target.value)} />
        </div>
        <div>
            <label htmlFor="description" className="text-blueGray-300">Description</label>
            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
            <label htmlFor="userEmail" className="text-blueGray-300">User Email *</label>
            <input type="email" id="userEmail" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} required />
        </div>
        <div>
            <label htmlFor="images" className="text-blueGray-300">Images *</label>
            <input type="file" id="images" multiple onChange={handleImageChange} required />
        </div>
        <div className='mt-4'>
            {loading ? (
            <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-4 ease-linear transition-all duration-150 cursor-pointer">Uploading...</button>
            ) : (
            <button type='submit'className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-4 ease-linear transition-all duration-150 cursor-pointer" >
                Upload
            </button>
            )}
        </div>
        </form>
        </div>
        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src={require("assets/img/pattern_react.png").default}
          alt="..."
        />

    </section>
    </>
  );
}

export default UploadForm;

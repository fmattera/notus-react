import React, { useState, useRef } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const FormForm = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = { Name: name, Email: email, Company: company };
    console.log(payload);
    try {
      setLoading(true);
      await axios
        .post('https://sheet.best/api/sheets/a4f85fa5-40f1-4969-9cf1-141269739dfe', payload)
        .then((response) => {
          setLoading(false);
          setName('');
          setEmail('');
          setCompany('');
          toast.success(`Application successful`);
        })
        .catch((error) => {
          toast.error(`Upload failed`);
        });
    } catch (e) {
      setLoading(false);
      toast.error(`Error: ${e}`);
    }
  };

  return (
    <div>
      <section>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <div>
            <label htmlFor='name' style={{ display: 'block' }}
            className="text-blueGray-300 ">
                Name *
                </label>
            <input
              type='text'
              id='name'
              value={name}
              placeholder='John Doe'
              onChange={(e) => setName(e.target.value)}
              required
              className='rounded mb-4'
            />
          </div>
          <div>
            <label htmlFor='email' style={{ display: 'block' }}
            className="text-blueGray-300">
                Email *
                </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='doe.john@neo-locus.com'
              required
              className='rounded mb-4'
            />
          </div>
          <div>
            <label htmlFor='company' style={{ display: 'block' }}
            className="text-blueGray-300">
                Company
                </label>
            <input
              type='text'
              id='company'
              value={company}
              placeholder='NeoLocus'
              onChange={(e) => setCompany(e.target.value)}
              className='rounded mb-4'
            />
          </div>
          <div className='mt-4'>
          {loading ? (
            <button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-4 ease-linear transition-all duration-150 cursor-pointer">Applying...</button>
          ) : (
            <button type='submit'className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-4 ease-linear transition-all duration-150 cursor-pointer" >
                Apply
                </button>
          )}
          </div>
        </form>
      </section>
      <Toaster />
    </div>
  );
};

export default FormForm;

import FormForm from "./FormForm";


const SignupForm = () => {
    return ( 

<section className="py-20 bg-blueGray-600 overflow-hidden">
<div className="container mx-auto pb-64">
  <div className="flex flex-wrap justify-center">
    <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-12">
      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
        <i className="fas fa-regular fa-newspaper fa-xl"></i>
      </div>
      <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
        Let's stay in touch!
      </h3>
      {/* <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
        Since{" "}
        <a
          href="https://tailwindcss.com/?ref=creativetim"
          className="text-blueGray-300"
          
        >
          NeoLocus
        </a>{" "}
        is looking for clients to provide with our State of the Art solution, you can sign up for our newsletter and we will keep you posted on our progress.
      </p>
      <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
        Fill in the form below and we will get in touch!
      </p> */}

  
    {/* <div class="relative flex w-full flex-wrap items-stretch mb-3">
        <input type="text" placeholder="Name" class="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pr-10"/>
            <span class="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-3 py-3">
             <i class="fas fa-user"></i>
        </span>
      
    </div> */}
     <FormForm />
        
   
  </div>
</div>
</div>
</section>
    );
};
export default SignupForm;
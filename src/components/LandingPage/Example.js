
import { Link } from "react-router-dom";

const Example = () => {
    return (
<section className="mt-8 pb-40 relative bg-blueGray-100">
<div className="container mx-auto overflow-hidden pb-20">
  <div className="flex flex-wrap items-center">
    <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-16">
      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white mt-48">
        <i className="fas fa-solid fa-microchip fa-xl"></i>
        {/* <i class="fa-solid fa-microchip"></i> */}
      </div>
      <h3 className="text-3xl mb-2 font-semibold leading-normal">
        Generative AI for Businesses
      </h3>
      <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
        Powered by Stable Diffusion, we are able to generate high quality pictures
        of any of your products. Our AI model can place your models into any picture!
      </p>
      {/* <div className="block pb-6">
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
          Buttons
        </span>
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
          Inputs
        </span>
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
          Labels
        </span>
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
          Menus
        </span>
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
          Navbars
        </span>
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
          Pagination
        </span>
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
          Progressbars
        </span>
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
          Typography
        </span>
      </div> */}
       <Link to="/landing">
        <a
        className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
      >
        Try it out{" "}
        <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
      </a>
      </Link>
    </div>

    <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-48">
      <div className="relative flex flex-col min-w-0 w-full mb-6  md:mt-0 ">
        <img
          alt="..."
          src={require("assets/img/vimle-landing.png").default}
          className="w-full align-middle rounded absolute shadow-lg max-w-100-px z-3 left-145-px -top-29-px"
        />
        <img
          alt="..."
          src={require("assets/img/vimle-landing-in.jpg").default}
          className="w-full align-middle rounded-lg absolute shadow-lg -top-160-px left-260-px max-w-210-px"
        />
        <img
          alt="..."
          src={require("assets/img/up3.jpg").default}
          className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px -top-225-px left-40-px z-2"
        />
        <img
          alt="..."
          src={require("assets/img/item_pictures/smedstorp-2-seat-sofa-lejde-red-brown-black__0989821_pe818623_s5 Background Removed.png").default}
          className="w-full align-middle absolute max-w-120-px -right-150-px top-95-px"
        />
        {/* <img
          alt="..."
          src={require("assets/img/item_pictures/up4.jpg").default}
          className="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
        /> */}
        <img
          alt="..."
          src={require("assets/img/item_pictures/up4.jpg").default}
          className="w-full align-middle rounded absolute shadow-xl max-w-180-px left-195-px top-95-px"
        /> 
      </div>
    </div>
  </div>
</div>
</section>
    );
};

export default Example;
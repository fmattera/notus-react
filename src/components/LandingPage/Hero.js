import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
    className="header-section relative pt-32 pb-16 items-center flex"
    style={{
      backgroundImage: `url(${require("assets/vids/demo.gif").default})`,
      backgroundPosition: 'center', 
      backgroundSize: 'contain', 
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      position: 'relative',
    }}
  >
      <div className="container mx-auto items-center flex flex-wrap" style={{position: "absolute", bottom: "5%", left: "35%"}}>
        <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div className="pt-4 sm:pt-0">
            {/* <h2 className="font-semibold text-5xl text-blueGray-600 mb-8">
              Your products, <br />
              everywhere
            </h2> */}

            <div className="mt-12">
              <button>
                <Link
                  to="/upload"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-4 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Request a demo
                </Link>
              </button>

              <Link
                to="/landing"
                className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-4 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Try it out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

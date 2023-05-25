import React from "react";
import { Link } from "react-router-dom";

const Hero= () => { 
    return (
<section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-5xl text-blueGray-600">
                Your products, <br></br>everywhere
              </h2>
              <p className="mt-4 text-xl leading-relaxed text-blueGray-500">
              By using Generative AI, we place your products in any picture, or make a completely new picture with your product!
              </p>
              <div className="mt-12">
                <button>
                <Link to='/upload'
                
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Request a demo
                
                </Link>
                </button>

                <Link to="/landing"
                
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Try it out
                

                </Link>
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src={require("assets/img/landing_hero.png").default}
          alt="..."
        />
      </section>
      );
    };
      export default Hero;
